import nodemailer from "nodemailer"

export default class Mailer {
  constructor (user, password, host) {
    this.user = user;
    this.password = password;
    this.host = host;
    this.mailerService = this.getNodeMailerService();
  }

  getNodeMailerService(){
    return nodemailer.createTransport({
      service: this.host,
      auth: {
        user: this.user,
        pass: this.password,
      },
    });
  }

  sendMail(toEmail, subject, content, attachments = []) {
    const mailOptions = {
      from: this.user,
      to: toEmail,
      subject,
      text: content,
      attachments,
    };
    return this.mailerService.sendMail(mailOptions);
  }
}
