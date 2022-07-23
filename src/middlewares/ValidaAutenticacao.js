const { validateToken } = require('../utils/jwtToken');

const validaJwt = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const { message } = await validateToken(token);
        if (message) return res.status(401).json({ message });
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }    
};

module.exports = { validaJwt };