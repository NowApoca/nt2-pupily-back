import SessionsDaoClass from './SessionsDao.js';

const sessionsDao = new SessionsDaoClass()

export function getSessionsDao() {
    return sessionsDao
}