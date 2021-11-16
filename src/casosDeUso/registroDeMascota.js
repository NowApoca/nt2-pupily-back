import { generarId } from '../modulos/generarId/generarId.js'
import Mascota from '../modelos/Mascota.js';
import { getMascotasDao } from "../daos/mascotas/index.js"

const mascotaDao = getMascotasDao()

export async function registrarMascota(datosMascota) {
    const id = generarId()
    const mascota = new Mascota({ ...datosMascota, id })
    mascotaDao.save(mascota)

    return { mascota, token }
}
