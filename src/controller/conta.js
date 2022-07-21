const { getContaService, postDepositoService } = require('../service/conta');

const getContaController = async (req, res, next) => {
    try {
        const getConta = await getContaService(req);
        return res.status(201).json(getConta);
    } catch (error) {
        next(error)
    }
};

const postDepositoController = async (req, res, next) => {
    try {
        await postDepositoService(req);
        res.status(200).json({ message: 'Deposito realizado' });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getContaController,
    postDepositoController
}