import jwt from "jsonwebtoken"

const DAY = 24*60*60*1000;

export default class TokenHandler {
    constructor(jwtSecret, {expirationTime = DAY} = {}) {
      if(typeof TokenHandler.instance === "object"){
        return TokenHandler.instance;
      }
        this.jwtSecret = jwtSecret;
        this.expirationTime = expirationTime;
    }
    async deserializeSession(token) {
        return jwt.verify(token, this.jwtSecret);
    }
    serializeSession(data, customExpiredTime) {
        return jwt.sign(data, this.jwtSecret, {
          expiresIn:
            customExpiredTime || this.expirationTime || expiration,
          algorithm: "HS256",
        });
    }
}
