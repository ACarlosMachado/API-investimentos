const { getContaModel, postContaDeposito, getSaldoConta, postContaSaque, getIdCliente } = require('../model/conta');

const getContaService = async (req) => {
    try {
        const { id } = req.params;       
        const getConta = await getContaModel(id);
        return getConta;
        
    } catch (error) {
       return(error) 
    }
};

const postDepositoService = async (req) => {
    try {
        const { codCliente, valor } = req.body;
        await postContaDeposito(codCliente, valor);
        console.log('aqui===', postDeposito);
        // return postDeposito;    
    } catch (error) {
        return error
    }
};

const postSaqueService = async (req) => {
    try {
        const { codCliente, valor } = req.body;
        const idCliente = await getIdCliente(codCliente);
        const verificaSaldo = await getSaldoConta(idCliente);
        if (verificaSaldo < valor ) {
            return { code: 422, message: 'Saldo insuficiente' }
        }
        await postContaSaque(codCliente, valor);
        return { code: 200, message: 'Saque realizado com sucesso!' }        
    } catch (error) {
        return error;
    }
};

module.exports = {
    getContaService,
    postDepositoService,
    postSaqueService
}