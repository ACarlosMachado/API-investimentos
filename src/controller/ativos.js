const { getAtivoService } = require('../service/ativos');
 
const getAtivoController = async (req, res, next) => {
    try {
        const getAtivo = await getAtivoService(req);
        res.status(201).json(getAtivo);
    } catch (error) {
        next(error);
    }
};

module.exports = { getAtivoController };