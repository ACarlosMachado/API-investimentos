const { Router } = require('express');
const { addOrdemCompra, addOrdemVenda } = require('../controller/investimentos');
const { validaOrdem } = require('../middlewares/validateOrdem');

const investimentos = Router();

investimentos.post('/investimentos/comprar', validaOrdem, addOrdemCompra);
investimentos.post('/investimentos/vender', validaOrdem, addOrdemVenda);

module.exports = { investimentos };