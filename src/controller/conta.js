const { getContaService } = require('../service/conta');

const getContaController = async (req, res, next) => {
    try {
        const getConta = await getContaService(req);
        return res.status(201).json(getConta);
    } catch (error) {
        next(error)
    }
};

module.exports = {
    getContaController
}