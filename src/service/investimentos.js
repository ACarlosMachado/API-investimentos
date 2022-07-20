const { postCompraModel } = require('../model/investimentos');

const addOrdemCompraService = async (req) => {
    console.log('estou na service');
    try {
        const postCompra = await postCompraModel(req);
        return postCompra;
        
    } catch (error) {
        return error;
    }
};

module.exports = { addOrdemCompraService }