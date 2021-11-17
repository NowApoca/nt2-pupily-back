import TokenHandler from "../modulos/session/session.js"
import config from "../config.js"

const tokenHandler = new TokenHandler(config.SECRET)

export async function getAuth(req, res, next){
    if(!req.headers.authorization){
        throw new Error("El usuario debe estar logeado")
    }
    const usuario = await tokenHandler.deserializeSession(req.headers.authorization)
    res.locals.operador = usuario;
    next()
}

export function getUserEmail(req, res, next){
    res.locals.userEmail = req.params.userEmail;
    next();  
}

