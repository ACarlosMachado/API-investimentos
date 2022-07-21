const { Router } = require('express');
const { validaCodCliente } = require('../middlewares/validaCodCliente');
const { validaConta } = require('../middlewares/validaConta');
const { getContaController, postDepositoController } = require('../controller/conta');

const conta = Router();

conta.get('/conta/:id', validaCodCliente, getContaController);
conta.post('/conta/deposito', validaConta, postDepositoController);

module.exports = { conta };