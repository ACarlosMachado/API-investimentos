# Desafio Técnico XP

## Descrição do projeto

API que permite listar ações disponíveis, realizar ordens de compra e venda de ações; e, também, verificar o saldo e realizar saque e deposito na conta da pessoa cliente.

Uma API é do tipo RESTful que utiliza Express(Node.js), a arquitetura MSC (model-service-controller) e banco de dados MYSQL.   

## Funcionalidades

- Login da pessoa cliente (com validação e geração de token JWT);
- Listagem de ações disponíveis, bem como quantidade e valor;
- Listagem de ações na carteira do cliente e quantidade e valor;
- Ordem de compra e venda de ações;
- Saque e depósito na conta do cliente;

## Executando a aplicação

- Clone o repositório: `git clone git@github.com:ACarlosMachado/desafio-tecnico-xp.git`
- Entre no diretório: `cd desafio-tecnico-xp/`
- Instale as dependências: `npm install`
- Execute o docker: `docker-compose up -d`
- Execute o script de Investimentos.sql no workbench
