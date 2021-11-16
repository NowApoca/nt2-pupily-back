import TokenHandler from "../modulos/session/session.js"
import config from "../config.js"
import { getSessionsDao } from "../daos/sessions/index.js"

const tokenHandler = new TokenHandler(config.SECRET)
const sessionDao = getSessionsDao();

const USUARIO_NO_AUTENTIFICADO = "El usuario debe estar logeado";

export async function getAuth(req, res, next){
    if(!req.headers.authorization){
        next({message: USUARIO_NO_AUTENTIFICADO});
        return;
    }
    const session = sessionDao.findToken(req.headers.authorization)
    if(!session){
        next({message: USUARIO_NO_AUTENTIFICADO});
        return;
    }
    const usuario = await tokenHandler.deserializeSession(req.headers.authorization)
    res.locals.operador = usuario;
    next()
}

export function getUserEmail(req, res, next){
    res.locals.userEmail = req.params.userEmail;
    next();  
}

