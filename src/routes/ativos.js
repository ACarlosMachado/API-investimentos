const { Router } = require('express');
const { validaAtivo } = require('../middlewares/validateAtivos');
const { getAtivoController } = require('../controller/ativos');

const ativos = Router();

ativos.get('/ativos/:id', validaAtivo, getAtivoController);

module.exports = { ativos };