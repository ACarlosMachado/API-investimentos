const connection = require('./connection');

const getValorAtivo = async (codAtivo) => {
    const [result] = await connection.execute(`
    SELECT valor AS valorAtivo FROM Investimentos.ativos WHERE codAtivo = (?)`, [codAtivo]);
    return result[0];
};

const getIdCliente = async (codCliente) => {
    const [idCliente] = await connection.execute(`SELECT cliente_id AS id 
    FROM Investimentos.clientes WHERE codCliente = (?)`, [codCliente]);
    const { id } = idCliente[0];
    return id;
};

const getIdAtivo = async (codAtivo) => {
    const [idAtivo] = await connection.execute(`SELECT ativo_id AS ativoId 
    FROM Investimentos.ativos WHERE codAtivo = (?)`, [codAtivo]);
    const { ativoId } = idAtivo[0];
    return ativoId;
};

const getIdCarteiraAtivo = async (clienteId, ativoId) => {
    const [result] = await connection.execute(`SELECT carteira_ativos_id AS id
    FROM Investimentos.carteira_ativos WHERE cliente_id = (?) AND ativo_id = (?)`, 
    [clienteId, ativoId]);
     const { id } = result[0];
     return id;
};

const getQtdeAtivo = async (codAtivo) => {
    const query = ('SELECT qtdeAtivo FROM Investimentos.ativos WHERE codAtivo = (?)');
    const [qtde] = await connection.execute(query, [codAtivo]);
    const { qtdeAtivo } = qtde[0];
    return qtdeAtivo;
};

const getQtdeAtivoCliente = async (codAtivo, codCliente) => {
    const clienteId = await getIdCliente(codCliente);
    const ativoId = await getIdAtivo(codAtivo);
    const query = (`SELECT qtdeAtivo AS qtdeAtv 
    FROM Investimentos.carteira_ativos WHERE cliente_id = 1 AND ativo_id = 1;`);
    const [qtde] = await connection.execute(query, [clienteId, ativoId, codAtivo]);
    const { qtdeAtv } = qtde[0];
    return qtdeAtv;
};

const getSaldoCliente = async (codCliente) => {
    const [saldo] = await connection.execute(`
        SELECT
        C.saldo AS saldo
    FROM Investimentos.carteiras AS C
    INNER JOIN Investimentos.clientes clt ON clt.cliente_id = C.cliente_id
    WHERE clt.codCliente = (?)`, [codCliente]);
    return saldo[0];
};

const postCompraModel = async (codAtivo, codCliente, qtdeAtivo) => {    
    const clienteId = await getIdCliente(codCliente);
    const ativoId = await getIdAtivo(codAtivo);
    const query = (`INSERT INTO Investimentos.carteira_ativos (cliente_id, ativo_id, qtdeAtivo) 
    VALUES (?, ?, ?)`);
    await connection.execute(query, [clienteId, ativoId, qtdeAtivo]);
    return { code: 201, message: 'Compra realizada' };
};

const postVendaModel = async (codAtivo, codCliente, qtdeAtivoVenda) => {
    const clienteId = await getIdCliente(codCliente);
    const ativoId = await getIdAtivo(codAtivo);
    const carteiraAtivoId = await getIdCarteiraAtivo(clienteId, ativoId);
    await connection.execute(`UPDATE Investimentos.carteira_ativos
    SET qtdeAtivo = (qtdeAtivo - (?))
    WHERE carteira_ativos_id = (?)`, [qtdeAtivoVenda, carteiraAtivoId]);
    return { code: 201, message: 'Venda realizada' };
};

const putSaldoCliente = async (custo, codCliente) => {
    const idCliente = await getIdCliente(codCliente);
    await connection.execute(`UPDATE Investimentos.carteiras AS carteira
     SET saldo = (saldo - (?)) WHERE carteira.cliente_id = (?)`, [custo, idCliente]);
};

const pustSaldoCLienteVenda = async (custo, codCliente) => {
    const idCliente = await getIdCliente(codCliente);
    await connection.execute(`UPDATE Investimentos.carteiras AS carteira 
    SET saldo = (saldo + (?)) WHERE carteira.cliente_id = (?)`, [custo, idCliente]);
};

module.exports = {
    putSaldoCliente,
    pustSaldoCLienteVenda,
    postCompraModel,
    postVendaModel,
    getQtdeAtivo,
    getValorAtivo,
    getSaldoCliente,
    getQtdeAtivoCliente,
};