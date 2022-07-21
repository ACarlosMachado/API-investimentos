const express = require('express');
const  { investimentos } = require('./routes/investimentos');
const errorHandler = require('./middlewares/error');

const app = express();

app.use(express.json());
app.use(investimentos);
app.use(errorHandler);

module.exports = { app }