const connection = require('./connection');

const postCompraModel = async (req) => {
    const [res] = await connection.execute(`SELECT * FROM Investimentos.carteira_ativos;`);
    return res
};

module.exports = {
    postCompraModel
}