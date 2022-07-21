const { postCompraModel, getQtdeAtivo } = require('../model/investimentos');

const verificaQtdeAtivo = async (codAtivo) => {
    try {        
        const verificaQtde = await getQtdeAtivo(codAtivo);
        return verificaQtde        
    } catch (error) {
        return error;
    }
}

const addOrdemCompraService = async (req) => {
    try {
        const { codAtivo, codCliente, qtdeAtivo } = req.body;
        const verificaQtdeDisponivel = await verificaQtdeAtivo(codAtivo);
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

module.exports = { 
    addOrdemCompraService,
    verificaQtdeAtivo
}