import { getUsuariosDao } from '../daos/usuarios/index.js';
import { getSessionsDao } from '../daos/sessions/index.js';
import { generarId } from '../modulos/generarId/generarId.js'
import TokenHandler from '../modulos/session/session.js';
import config from "../config.js"

const usuarioDao = getUsuariosDao()
const sessionDao = getSessionsDao()
const tokenHandler = new TokenHandler(config.SECRET)

export async function loginUsuario({email, password}) {
    const usuario = usuarioDao.findByEmail(email)

    const loginInvalidoMsg = "El usuario o la password no existen";

    if(usuario === null){
        throw new Error(loginInvalidoMsg);
    }

    let esPasswordValida = await usuario.verificarPassword(password);
    if(!esPasswordValida){
        throw new Error(loginInvalidoMsg);
    }

    const token = tokenHandler.serializeSession(usuario.getData());
    sessionDao.save(token)

    return { token }
}
