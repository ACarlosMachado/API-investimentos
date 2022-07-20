const { Router } = require('express');
const { addOrdemCompra, addOrdemVenda } = require('../controller/investimentos');

const investimentos = Router();

investimentos.get('/investimentos/comprar', addOrdemCompra);
investimentos.get('/investimentos/vender', addOrdemVenda);

module.exports = { investimentos };