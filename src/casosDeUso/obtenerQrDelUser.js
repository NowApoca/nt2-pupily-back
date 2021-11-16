import { getUsuariosDao } from "../daos/usuarios/index.js"
import ModuloQR from "../modulos/qr/qr.js"

const usuarioDao = getUsuariosDao()
const generadorDeQrs = new ModuloQR()

export async function generarQrDeUsuario(usuario) {
    const usuarioFromStore = usuarioDao.findByEmail(usuario.email);
    if(!usuarioFromStore){
        throw new Error(`El usuario con email ${usuario.email} no existe`)
    }

    const qrData = await generadorDeQrs.generarCodigoQR(
        usuarioFromStore.getData().toString(),
        "string"
    );

    return { qrData }
}
