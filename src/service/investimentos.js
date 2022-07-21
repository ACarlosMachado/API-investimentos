const { postCompraModel,
    getQtdeAtivo, 
    postVendaModel, 
    getQtdeAtivoCliente } = require('../model/investimentos');

const verificaQtdeAtivo = async (codAtivo, ordem, codCliente) => {
    try {
        if (ordem === 'compra') {
            const verificaQtde = await getQtdeAtivo(codAtivo);
            return verificaQtde
        }
        const veficaQtdeAtivoCliente = await getQtdeAtivoCliente(codAtivo, codCliente);
        return veficaQtdeAtivoCliente;
    } catch (error) {
        return error;
    }
}

const addOrdemCompraService = async (req) => {
    try {
        const { codAtivo, codCliente, qtdeAtivo } = req.body;
        const verificaQtdeDisponivel = await verificaQtdeAtivo(codAtivo, 'compra');
        if (verificaQtdeDisponivel < qtdeAtivo) {
            return { code: 422, message: 'Quantidade de ativo indisponível' };
        } else {
            const postCompra = await postCompraModel(codAtivo, codCliente, qtdeAtivo);
            return postCompra;
        }
        
    } catch (error) {
        return error;
    }
};

const addOrdemVendaService = async (req) => {
    try {
        const { codAtivo, codCliente, qtdeAtivo } = req.body;
        const verificaQtdeDisponivelVenda = await verificaQtdeAtivo(codAtivo, 'venda', codCliente);
        if (verificaQtdeDisponivelVenda < qtdeAtivo) {
            return { code: 422, message: 'Quantidade de ativo indisponível' };
        } else {
            const postCompra = await postVendaModel(codAtivo, codCliente, qtdeAtivo);
            return postCompra;
        }
        
    } catch (error) {
        return error;
    }
};

module.exports = { 
    addOrdemCompraService,
    addOrdemVendaService,
    verificaQtdeAtivo
}