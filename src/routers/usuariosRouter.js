import { Router } from 'express'
import { registrarUsuario } from '../casosDeUso/registroDeUsuarios.js'
import { obtenerExcelMascotas } from '../casosDeUso/obtenerExcelMascotasUser.js'
import { generarQrDeUsuario } from '../casosDeUso/obtenerQrDelUser.js'
import { loginUsuario } from '../casosDeUso/authDeUsuarios.js'
import { getAuth, getUserEmail } from "./middleware.js"
import fs from "fs"

const usuariosRouter = Router()

usuariosRouter.post('/',  async (req, res) => {
    try {
        const usuario = await registrarUsuario({ ...req.body })
        res.json(usuario)
    } catch (error) {
        res.json({ error: error.message })
    }
})

usuariosRouter.post('/login', async (req, res) => {
    try {
        const token = await loginUsuario({ ...req.body })
        res.json(token)
    } catch (error) {
        res.json({ error: error.message })
    }
})

usuariosRouter.get('/data/qr', getAuth, async (req, res) => {
    try {
        const qrData = await generarQrDeUsuario(res.locals.operador)
        res.json(qrData)
    } catch (error) {
        res.json({ error: error.message })
    }
})

usuariosRouter.get('/mascotas/:userEmail', getUserEmail, async (req, res) => {
    try {
        const { fileName } = await obtenerExcelMascotas(res.locals.userEmail, () => {
            res.download(fileName, () => {
                fs.unlink(fileName, (err) => {
                    console.log(`ERROR DELETING FILE: ${err}`)
                })
            })
        })
    } catch (error) {
        res.json({ error: error.message })
    }
})

export { usuariosRouter }