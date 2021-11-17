export default class SessionsDao {
    constructor() {
        this.sessions = {};
    }

    findAll() {
        return this.sessions
    }

    save(token) {
        this.sessions[token] = true;
    }

    findToken(token){
        return this.sessions[token];
    }
}