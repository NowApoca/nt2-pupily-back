import { generarId } from '../modulos/generarId/generarId.js'
import Mailer from '../modulos/mailer/mailer.js';
import Usuario from '../modelos/Usuario.js';
import config from "../config.js"
import {getUsuariosDao} from "../daos/usuarios/index.js"

const usuarioDao = getUsuariosDao()

const enviadorDeMails = new Mailer(
    config.mailer.user,
    config.mailer.pass,
    config.mailer.host
);

const ASUNTO_USER_REGISTRADO = (nombre) => `Hola ${nombre}, bienvenido!`;
const CONTENIDO_USER_REGISTRADO = (nombre) => `Estimado ${nombre}, bienvenido a nuestra app!`;;

export async function registrarUsuario(datosUsuario) {
    const id = generarId()
    const usuarioEnDB = usuarioDao.findByEmail(datosUsuario.email);
    if(usuarioEnDB){
        throw new Error(`El email ${datosUsuario.email} ya esta en uso`)
    }
    const usuario = new Usuario({ ...datosUsuario, id })
    await usuario.hashPassword();
    usuarioDao.save(usuario)

    await enviadorDeMails.sendMail(
        usuario.email,
        ASUNTO_USER_REGISTRADO(usuario.nombre),
        CONTENIDO_USER_REGISTRADO(usuario.nombre)
    )

    return { usuario }
}
