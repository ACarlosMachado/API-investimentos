const connection = require('./connection');

const getIdCliente = async (codCliente) => {
    const [idCliente] = await connection.execute(`SELECT cliente_id AS id FROM Investimentos.clientes
    WHERE codCliente = (?)`, [codCliente]);
    const { id } = idCliente[0];
    return id;
};

const getIdAtivo = async (codAtivo) => {
    const [idAtivo] = await connection.execute(`SELECT ativo_id AS ativoId FROM Investimentos.ativos WHERE codAtivo = (?)`, [codAtivo]);
    const { ativoId } = idAtivo[0];
    return ativoId;
};

const getQtdeAtivo = async (codAtivo) => {
    const query = (`SELECT qtdeAtivo FROM Investimentos.ativos WHERE codAtivo = (?)`);
    const [qtde] = await connection.execute(query, [codAtivo]);
    const { qtdeAtivo } = qtde[0];
    return qtdeAtivo;
};

const postCompraModel = async (codAtivo, codCliente, qtdeAtivo) => {    
    const clienteId = await getIdCliente(codCliente);
    const ativoId = await getIdAtivo(codAtivo);
    const query = (`INSERT INTO Investimentos.carteira_ativos (cliente_id, ativo_id, qtdeAtivo) VALUES (?, ?, ?)`)
    const [respsta] = await connection.execute(query, [clienteId, ativoId, qtdeAtivo]);
    return { code: 201, message: 'Compra realizada' }
};

module.exports = {
    postCompraModel,
    getQtdeAtivo
}