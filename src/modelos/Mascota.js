export default class Mascota {
    constructor({ id, nombre, ownerEmail }) {
        this.setId(id)
        this.setNombre(nombre)
        this.setOwner(ownerEmail)
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

    setOwner(ownerEmail) {
        if (!ownerEmail) {
            throw new Error('Error en los argumentos: falta el ownerEmail')
        }
        this.ownerEmail = ownerEmail
    }
}