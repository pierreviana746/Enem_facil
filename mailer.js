const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

async function enviarCodigo(email, codigo) {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Código de verificação",
    text: `Seu código de verificação é: ${codigo}`
  });
}

module.exports = enviarCodigo;