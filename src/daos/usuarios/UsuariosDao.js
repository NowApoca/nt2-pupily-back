import Usuario from "../../modelos/Usuario.js";

export default class UsuariosDao {
    constructor() {
        this.usuarios = []
    }

    findById(id) {
        return this.usuarios.find(u => u.id == id)
    }

    findAll() {
        return this.usuarios
    }

    save(usuario) {
        this.usuarios.push(usuario)
    }

    findByEmail(email){
        let usuario = null;
        this.usuarios.forEach(usuarioEnDb => {
            if(usuarioEnDb.email === email){
                usuario = usuarioEnDb;
            }
        })
        return usuario;
    }
}