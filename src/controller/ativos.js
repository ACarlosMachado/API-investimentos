const { getAtivoService, getAtivosByClienteService  } = require('../service/ativos');
 
const getAtivoController = async (req, res, next) => {
    try {
        const getAtivo = await getAtivoService(req);
        res.status(201).json(getAtivo);
    } catch (error) {
        next(error);
    }
};

const getAtivosByCliente = async (req, res, next) => {
    try {
        const getService = await getAtivosByClienteService(req);
        res.status(200).json(getService);
    } catch (error) {
        next(error);
    }
}

module.exports = { getAtivoController, getAtivosByCliente };