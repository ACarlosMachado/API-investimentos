const { expect } = require('chai');
const sinon = require('sinon');
const { getAtivosByCod, getAtivosByCliente } = require('../../src/model/ativos');
const connection = require('../../src/model/connection');

describe('Rota: "/ativos/{codAtivo}"', () => {
    const codAtivo = 'vale3';
    describe('Quando tem ativo cadastrado', () => {
        before(() => {
            sinon.stub(connection, 'execute').resolves([[{
                codAtivo: 'PETR4',
                qtdeAtivo: 1500,
                valor: '28.48',
              }]]);
        });
        after(() => {
            connection.execute.restore();
        });
        it('Retorna um objeto', async () => {
            const result = await getAtivosByCod(codAtivo);
            expect(result).to.be.an('object');
        });
        it('O objeto tem as propriedades "codAtivo", "qtdeAtivo", "valor"', async () => {
            const result = await getAtivosByCod(codAtivo);
            expect(result).to.have.all.keys('codAtivo', 'qtdeAtivo', 'valor');
        });
    });
});

describe('Rota: "/ativos/clientes/{codCliente}"', () => {
    const codClienteValido = 1111;
    
    describe('Quando o cliente tem ativos na carteira', () => {
        before(() => {
            sinon.stub(connection, 'execute').resolves([[
                {
                  codCliente: 1111,
                  codAtivo: 'PETR4',
                  qtdeAtivo: 50,
                  valor: '28.48',
                },
                {
                  codCliente: 1111,
                  codAtivo: 'VALE3',
                  qtdeAtivo: 100,
                  valor: '68.73',
                },
              ]]);
        });
        after(() => {
            connection.execute.restore();
        });
        it('Retorna um array de objetos', async () => {
            const result = await getAtivosByCliente(codClienteValido);
            expect(result).to.have.lengthOf(2);
            expect(result).to.be.an('array');
            expect(result[0]).to.be.an('object');
        });
        it(`O objeto tem as propriedades "codCliente", "codAtivo",
         "qtdeAtivo", "valor"`, async () => {
            const result = await getAtivosByCliente(codClienteValido);
            expect(result[0]).to.have.all.keys('codCliente', 'codAtivo', 'qtdeAtivo', 'valor');
        });
    });
});