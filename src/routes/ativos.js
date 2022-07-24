const { Router } = require('express');
const { validaAtivo } = require('../middlewares/validaCodAtivo');
const { validaCodCliente } = require('../middlewares/validaCodCliente');
const { validaJwt } = require('../middlewares/ValidaAutenticacao');
const { getAtivoController, getAtivosByCliente } = require('../controller/ativos');

const ativos = Router();

ativos.get('/ativos/:id', validaAtivo, getAtivoController);
ativos.get('/ativos/clientes/:id', validaJwt, validaCodCliente, getAtivosByCliente);

module.exports = { ativos };