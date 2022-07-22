const { Router } = require('express');
const { validaAtivo } = require('../middlewares/validaCodAtivo');
const { validaCodCliente } = require('../middlewares/validaCodCliente');
const { getAtivoController, getAtivosByCliente } = require('../controller/ativos');

const ativos = Router();

ativos.get('/ativos/:id', validaAtivo, getAtivoController);
ativos.get('/ativos/clientes/:id', validaCodCliente, getAtivosByCliente)

module.exports = { ativos };