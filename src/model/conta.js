const connection = require('./connection');

const getIdCliente = async (codCliente) => {
    const [idCliente] = await connection.execute(`SELECT cliente_id AS id FROM Investimentos.clientes
    WHERE codCliente = (?)`, [codCliente]);
    const { id } = idCliente[0];
    return id;
};

const getContaModel = async (codCliente) => {
    const clienteId =  await getIdCliente(codCliente);
    const queryGet = (`SELECT t1.codCliente, t2.saldo
    FROM Investimentos.clientes AS t1
    INNER JOIN Investimentos.carteiras AS t2
    ON t1.cliente_id = (?) AND t2.cliente_id = (?)`);
    const [result] = await connection.execute(queryGet, [clienteId, clienteId]);
    return result[0];
};

module.exports = {
    getContaModel,
}