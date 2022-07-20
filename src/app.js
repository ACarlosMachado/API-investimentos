const express = require('express');
const  { investimentos } = require('./routes/investimentos');

const app = express();

app.use(express.json());
app.use(investimentos);

module.exports = { app }