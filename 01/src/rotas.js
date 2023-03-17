const express = require('express');
const { login } = require('./controlador/login');

const rotas = express.Router();

rotas.get('/', login);

module.exports = { rotas };