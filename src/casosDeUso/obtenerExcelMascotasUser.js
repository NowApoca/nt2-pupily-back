import {generarId} from "../modulos/generarId/generarId.js"
import generateExcel from '../modulos/excel/excel.js'
import { getMascotasDao } from "../daos/mascotas/index.js"
import { getUsuariosDao } from "../daos/usuarios/index.js"

const mascotaDao = getMascotasDao()
const usuarioDao = getUsuariosDao()

export async function obtenerExcelMascotas(userEmail, cb) {
    const usuario = usuarioDao.findByEmail(userEmail)
    if(!usuario){
        throw new Error(`EL USUARIO ${userEmail} NO EXISTE`)
    }
    const mascotas = mascotaDao.getMascotasDeUsuarioPorEmail(userEmail);
    const headers = ['Nombre', 'Id'];
    const fileName = generarId();
    const dataMascotas = mascotas.map(mascota => [mascota.nombre, mascota.id]);
    await generateExcel(headers, dataMascotas, {outputFile: fileName, cb})

    return { fileName: fileName + '.xlsx' }
}
