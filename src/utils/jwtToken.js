require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'hjasjdhajsdhjsahdjsahd';

const jwtConfig = {
    algorithm: 'HS256',
    expiresIn: '1d',
  };

const createToken = (payload) => jwt.sign(payload, SECRET, jwtConfig);

const validateToken = async (token) => {
    if (!token) return { message: 'Token not found' };
    try {
      const payload = await jwt.verify(token, SECRET, jwtConfig);
      return payload;  
    } catch (error) {
      const erro = { message: 'Expired or invalid token' };
      return erro;
    }
};

module.exports = {
    createToken,
    validateToken,
};