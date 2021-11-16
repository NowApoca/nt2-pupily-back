import { generarId } from '../modulos/generarId/generarId.js'
import Mascota from '../modelos/Mascota.js';
import { getMascotasDao } from "../daos/mascotas/index.js"
import { getUsuariosDao } from "../daos/usuarios/index.js"

const mascotaDao = getMascotasDao();
const usuarioDao = getUsuariosDao();

export async function registrarMascota(datosMascota) {
    const id = generarId()
    const usuario = usuarioDao.findByEmail(datosMascota.ownerEmail);
    if(!usuario){
        throw new Error(`El usuario ${datosMascota.ownerEmail} no existe`);
    }
    const mascota = new Mascota({ ...datosMascota, id })
    mascotaDao.save(mascota)

    return { mascota }
}
