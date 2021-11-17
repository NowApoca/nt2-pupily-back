export default class MascotasDao {
    constructor() {
        this.mascotas = []
    }

    findById(id) {
        return this.mascotas.find(u => u.id == id)
    }

    findAll() {
        return this.mascotas
    }

    save(mascota) {
        this.mascotas.push(mascota)
    }

    getMascotasDeUsuarioPorEmail(email){
        const mascotasDelUsuario = [];
        this.mascotas.forEach(mascota => {
            if(mascota.ownerEmail === email){
                mascotasDelUsuario.push(mascota)
            }
        })
        return mascotasDelUsuario;
    }
}