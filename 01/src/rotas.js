const express = require('express');
const { cadastrousuario } = require('./controlador/cadastro');

const rotas = express.Router();

rotas.post('/', cadastrousuario);

module.exports = { rotas };