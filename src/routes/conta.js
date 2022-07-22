const { Router } = require('express');
const { validaCodCliente } = require('../middlewares/validaCodCliente');
const { validaConta } = require('../middlewares/validaConta');
const { getContaController, postDepositoController, postSaqueController } = require('../controller/conta');

const conta = Router();

conta.get('/conta/:id', validaCodCliente, getContaController);
conta.post('/conta/deposito', validaConta, postDepositoController);
conta.post('/conta/saque', validaConta, postSaqueController);

module.exports = { conta };