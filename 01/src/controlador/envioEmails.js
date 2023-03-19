const transportador = require('./email');
const envioEmails = async (req, res) => {

    //envio de email

    transportador.sendMail({
        from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
        to: `${usuario.nome} <${usuario.email}>`,
        subject: 'verificação de Integração',
        text: 'Integração verificada com sucesso!'
    });

    return res.json('Login efetuado com sucesso.');
}

module.exports = {
    envioEmails
}