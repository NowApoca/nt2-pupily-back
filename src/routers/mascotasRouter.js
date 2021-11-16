import { Router } from 'express'
import { registrarMascota } from '../casosDeUso/registroDeMascota.js'

const mascotasRouter = Router()

mascotasRouter.post('/', async (req, res) => {
    try {
        const mascota = await registrarMascota({ ...req.body})
        res.json(mascota)
    } catch (error) {
        res.json({ error: error.message })
    }
})

export { mascotasRouter }