const {
    postCompraModel,
    getQtdeAtivo,
    getValorAtivo,
    postVendaModel,
    getSaldoCliente,
    putSaldoCliente,
    getQtdeAtivoCliente,
    pustSaldoCLienteVenda } = require('../model/investimentos');

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
};

const valorOrdem = async (req) => {
    try {
        const { codAtivo, qtdeAtivo } = req.body;
        const { valorAtivo } = await getValorAtivo(codAtivo);
        const valorAtivoNumber = parseFloat(valorAtivo); 
        return (valorAtivoNumber * qtdeAtivo);
    } catch (error) {
        return error;
    }
};

const verificaSaldo = async (req) => {
    try {
        const { codCliente } = req.body;
        const custoOrdem = await valorOrdem(req); 
        const saldoDisponivel = await getSaldoCliente(codCliente);
        const { saldo } = saldoDisponivel;
        const saldoNumber = parseFloat(saldo);
        if (custoOrdem > saldoNumber ) return { code: 422, message: 'saldo insuficiente' }
        return { custo: custoOrdem };
    } catch (error) {
        return error;
    }
};

const addOrdemCompraService = async (req) => {
    try {
        const { codAtivo, codCliente, qtdeAtivo } = req.body;
        const verificaQtdeDisponivel = await verificaQtdeAtivo(codAtivo, 'compra');
        if (verificaQtdeDisponivel < qtdeAtivo) {
            return { code: 422, message: 'Quantidade de ativo indisponível' };
        }
        const { code, message, custo } = await verificaSaldo(req);
        if (code) return { code, message }
        await putSaldoCliente(custo, codCliente);
        const postCompra = await postCompraModel(codAtivo, codCliente, qtdeAtivo, custo); 
        return postCompra;

        
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
        }
        const valorVenda = await valorOrdem(req);
        await pustSaldoCLienteVenda(valorVenda, codCliente);
        const postCompra = await postVendaModel(codAtivo, codCliente, qtdeAtivo);
        return postCompra;
        
    } catch (error) {
        return error;
    }
};

module.exports = { 
    addOrdemCompraService,
    addOrdemVendaService,
    verificaQtdeAtivo
};