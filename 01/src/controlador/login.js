const transportador = require('./email');

const usuario = {
    nome: 'Dryego Barbosa',
    email: 'dryego.lisboa@hotmail.com',
    senha: '123456'
}

const login = async (req, res) => {
    const { email, senha } = req.body;

    if (email !== usuario.email) {
        return res.status(400).json('email ou senha invalidos.');
    }

    if (!senha || senha !== usuario.senha) {
        return res.status(400).json('email ou senha invalidos.');
    }

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
    login
}