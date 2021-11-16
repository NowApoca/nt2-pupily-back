import { generarId } from '../modulos/generarId/generarId.js'
import Mailer from '../modulos/mailer/mailer.js';
import Usuario from '../modelos/Usuario.js';
import config from "../config.js"
import {getUsuariosDao} from "../daos/usuarios/index.js"

const usuarioDao = getUsuariosDao()
const enviadorDeMails = new Mailer(
    config.mailer.user,
    config.mailer.password,
    config.mailer.host
);

const ASUNTO_USER_REGISTRADO = (nombre) => `Hola ${nombre}, bienvenido!`;
const CONTENIDO_USER_REGISTRADO = (nombre) => `Estimado ${nombre}, bienvenido a nuestra app!`;;

export async function registrarUsuario(datosUsuario) {
    const id = generarId()
    const usuario = new Usuario({ ...datosUsuario, id })
    usuarioDao.save(usuario)

    await enviadorDeMails.sendMail(
        usuario.email,
        ASUNTO_USER_REGISTRADO(nombre),
        CONTENIDO_USER_REGISTRADO(nombre)
    )

    return { usuario, token }
}
