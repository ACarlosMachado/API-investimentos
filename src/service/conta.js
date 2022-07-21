const { getContaModel, postContaDeposito } = require('../model/conta');

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
}

module.exports = {
    getContaService,
    postDepositoService
}