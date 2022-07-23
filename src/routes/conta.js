const { Router } = require('express');
const { validaCodCliente } = require('../middlewares/validaCodCliente');
const { validaConta } = require('../middlewares/validaConta');
const { validaJwt } = require('../middlewares/ValidaAutenticacao');
const { getContaController, postDepositoController, postSaqueController } = require('../controller/conta');

const conta = Router();

conta.get('/conta/:id', validaJwt, validaCodCliente, getContaController);
conta.post('/conta/deposito', validaJwt, validaConta, postDepositoController);
conta.post('/conta/saque', validaJwt, validaConta, postSaqueController);

module.exports = { conta };