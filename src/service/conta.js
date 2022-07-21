const { getContaModel } = require('../model/conta');

const getContaService = async (req) => {
    try {
        const { id } = req.params;       
        const getConta = await getContaModel(id);
        return getConta;
        
    } catch (error) {
       return(error) 
    }
};

module.exports = {
    getContaService
}