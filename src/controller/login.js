const { postLoginService } = require('../service/login');

const postLoginController = async (req, res, next) => {
    try {
        const { code, message, token  } = await postLoginService(req);
        if (code) return res.status(code).json(message);
        res.status(201).json(token);
        
    } catch (error) {
        next(error);
    }
};

module.exports = {
    postLoginController
}