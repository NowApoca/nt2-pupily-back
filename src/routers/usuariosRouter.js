import { Router } from 'express'
import { registrarUsuario } from '../casosDeUso/registroDeUsuarios.js'
import { getAuth } from "./middleware.js"

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
    
})

usuariosRouter.get('/data/qr', getAuth, async (req, res) => {
    
})

usuariosRouter.get('/mascotas', getAuth, async (req, res) => {
    
})

export { usuariosRouter }