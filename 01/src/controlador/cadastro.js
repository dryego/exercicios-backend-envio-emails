const { knex } = require("../conexao");

const cadastrousuario = async (req, res) => {
    const { nome, email } = req.body;

    if (!nome) {
        return res.status(400).json('Nome é um campo obrigatorio.')
    }

    if (!email) {
        return res.status(400).json('Email é um campo obrigatorio.')
    }

    const buscaUsuaro = await knex('usuarios').where({ email }).first('email');

    if (buscaUsuaro !== undefined) {
        return res.status(400).json('Usuario já cadastrado.');
    }

    const novoUsuario = await knex('usuarios').insert({ nome, email });

    return res.status(200).json(`${nome}, você resebera no email: ${email} todas as novidades!`);
}

module.exports = {
    cadastrousuario
}