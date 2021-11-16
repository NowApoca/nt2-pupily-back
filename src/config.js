export default {
    mailer: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
        host: process.env.MAIL_HOST,
    },
    SECRET: process.env.SECRET,
}