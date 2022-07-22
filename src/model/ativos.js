const connection = require('./connection');

const getAtivosByCod = async (codAtivo) => {
    const queryAtivos = (`SELECT codAtivo, qtdeAtivo, valor FROM Investimentos.ativos WHERE codAtivo = (?)`)
    const [getAtivos] = await connection.execute(queryAtivos, [codAtivo]);
    return getAtivos[0];
};

const getAtivosByCliente = async (codCliente) => {
    const queryAtivoCliente = (`
    SELECT
        clt.codCliente,
        atv.codAtivo,
        catv.qtdeAtivo,
        atv.valor    
    FROM Investimentos.clientes AS clt
    INNER JOIN Investimentos.carteira_ativos AS catv ON catv.cliente_id = clt.cliente_id
    INNER JOIN Investimentos.ativos AS atv ON atv.ativo_id = catv.ativo_id
    WHERE clt.codCliente = (?)`);
    const [getAtivoClientes] = await connection.execute(queryAtivoCliente, [codCliente]);
    return getAtivoClientes;
    
};

module.exports = { 
    getAtivosByCod,
    getAtivosByCliente
 };