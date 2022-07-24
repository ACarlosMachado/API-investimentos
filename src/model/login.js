const connection = require('./connection');

const getCliente = async (email, senha) => {
    const [result] = await connection.execute(`
    SELECT * FROM Investimentos.clientes WHERE email = (?) AND senha = (?) 
    `, [email, senha]);
    console.log(result);
    return result;
};

module.exports = {
    getCliente,
};