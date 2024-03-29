const express = require('express');
const { investimentos } = require('./routes/investimentos');
const { ativos } = require('./routes/ativos');
const { conta } = require('./routes/conta');
const { login } = require('./routes/login');
const errorHandler = require('./middlewares/error');

const app = express();

app.use(express.json());
app.use(login);
app.use(investimentos);
app.use(ativos);
app.use(conta);
app.use(errorHandler);

module.exports = { app };