const { Router } = require('express');
const { validaCodCliente } = require('../middlewares/validaCodCliente');
const { getContaController } = require('../controller/conta');

const conta = Router();

conta.get('/conta/:id', validaCodCliente, getContaController);

module.exports = { conta };