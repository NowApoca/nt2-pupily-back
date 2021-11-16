import express from 'express'
import { usuariosRouter } from './src/routers/usuariosRouter.js'
import { mascotasRouter } from './src/routers/mascotasRouter.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/usuarios', usuariosRouter)
app.use('/api/mascotas', mascotasRouter)

app.listen(process.env.PORT, () => {
    console.log(`SERVIDOR CORRIENDO EN ${process.env.PORT}!`)
})
