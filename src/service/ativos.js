const { getAtivosByCod, getAtivosByCliente } = require('../model/ativos');

const getAtivoService = async (req) => {
    try {
        const { id } = req.params;
        const getAtivoModel = await getAtivosByCod(id);
        return getAtivoModel;        
    } catch (error) {
        return error
    }
};

const getAtivosByClienteService = async (req) => {
    try {
        const { id } = req.params;
        const getAtivosClienteModel = await getAtivosByCliente(id);
        return getAtivosClienteModel;
    } catch (error) {
        return error;
    }
};

module.exports = { getAtivoService, getAtivosByClienteService };