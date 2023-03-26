const express = require('express');
const { cadastrousuario } = require('./controlador/cadastro');
const { envioEmails } = require('./controlador/envioEmails');

const rotas = express.Router();

rotas.post('/', cadastrousuario);
rotas.get('/envio', envioEmails);

module.exports = { rotas };