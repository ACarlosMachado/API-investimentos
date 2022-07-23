const { postLoginModel, getCliente } = require('../model/login');
const { createToken } = require('../utils/jwtToken');

const postLoginService = async (req) => {
    try {
        const { email, senha } = req.body;
        const verificaCliente = await getCliente(email, senha);
        if (verificaCliente === []) {
            return { code: 404, message: "Dados inválidos" }
        }
        const token = await createToken(email, senha);
        return { token }
    } catch (error) {
        return error;
    }

};

module.exports = {
    postLoginService
};