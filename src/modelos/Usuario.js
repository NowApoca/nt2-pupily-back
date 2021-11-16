import bcrypt from "bcrypt"
import config from "../config.js"

export default class Usuario {
    constructor({ id, nombre, email, password }) {
        this.setId(id)
        this.setNombre(nombre)
        this.setEmail(email)
        this.setPassword(password)
    }

    setId(id) {
        if (!id) {
            throw new Error('Error en los argumentos: falta el id')
        }
        this.id = id
    }

    setNombre(nombre) {
        if (!nombre) {
            throw new Error('Error en los argumentos: falta el nombre')
        }
        this.nombre = nombre
    }

    setEmail(email) {
        if (!email) {
            throw new Error('Error en los argumentos: falta el email')
        }
        this.email = email
    }

    setPassword(password) {
        if (!password) {
            throw new Error('Error en los argumentos: falta el password')
        }
        this.password = password
    }

    async hashPassword() {
        this.password = await bcrypt.hash(
          this.password,
          parseInt(config.SALT_ROUNDS) || 10
        );
    }
    
    async verificarPassword(password) {
      return bcrypt.compare(password, this.password);
    }


    getData(){
        return {
            id: this.id,
            nombre: this.nombre,
            email: this.email,
        }
    }
}