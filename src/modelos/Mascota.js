export default class Mascota {
    constructor({ id, nombre, ownerEmail }) {
        this.setId(id)
        this.setNombre(nombre)
        this.setOwner(ownerEmail)
    }

    setId(id) {
        if (!id) {
            throw new Error('INVALID_ARGS: falta el id')
        }
        this.id = id
    }

    setNombre(nombre) {
        if (!nombre) {
            throw new Error('INVALID_ARGS: falta el nombre')
        }
        this.nombre = nombre
    }

    setOwner(ownerEmail) {
        if (!ownerEmail) {
            throw new Error('INVALID_ARGS: falta el ownerEmail')
        }
        this.ownerEmail = ownerEmail
    }
}