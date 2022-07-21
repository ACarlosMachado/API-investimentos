const { getAtivosByCod } = require('../model/ativos');

const getAtivoService = async (req) => {
    try {
        const { id } = req.params;
        const getAtivoModel = await getAtivosByCod(id);
        return getAtivoModel;        
    } catch (error) {
        return error
    }
};

module.exports = { getAtivoService };