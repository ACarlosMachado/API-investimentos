const connection = require('./connection');

const getAtivosByCod = async (codAtivo) => {
    const queryAtivos = (`SELECT codAtivo, qtdeAtivo, valor FROM Investimentos.ativos WHERE codAtivo = (?)`)
    const [getAtivos] = await connection.execute(queryAtivos, [codAtivo]);
    return getAtivos[0];
};

module.exports = { getAtivosByCod };