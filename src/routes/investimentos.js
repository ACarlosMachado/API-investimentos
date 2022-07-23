const { Router } = require('express');
const { addOrdemCompra, addOrdemVenda } = require('../controller/investimentos');
const { validaOrdem } = require('../middlewares/validateOrdem');
const { validaJwt } = require('../middlewares/ValidaAutenticacao');

const investimentos = Router();

investimentos.post('/investimentos/comprar', validaJwt ,validaOrdem, addOrdemCompra);
investimentos.post('/investimentos/vender', validaJwt, validaOrdem, addOrdemVenda);

module.exports = { investimentos };