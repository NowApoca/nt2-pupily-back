import express from 'express'
import { usuariosRouter } from './src/routers/usuariosRouter.js'
import { mascotasRouter } from './src/routers/mascotasRouter.js'
import config from "./src/config.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/usuarios', usuariosRouter)
app.use('/api/mascotas', mascotasRouter)

app.use((e, req, res, next) => {
    console.log('LOG ERROR HANDLER', e)
    res.json({ error: e.message })
  });


app.listen(config.PORT, () => {
    console.log(`SERVIDOR CORRIENDO EN ${config.PORT}!`)
})
