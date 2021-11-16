export default class UsuariosDao {
    constructor() {
        this.sessions = []
    }

    findById(id) {
        return this.sessions.find(u => u.id == id)
    }

    findAll() {
        return this.sessions
    }

    save(session) {
        this.sessions.push(session)
    }
}