const { Router } = require('express');
const { validaLogin } = require('../middlewares/validaLogin');
const { postLoginController } = require('../controller/login');

const login = Router();

login.get('/login', validaLogin, postLoginController);

module.exports = { login };