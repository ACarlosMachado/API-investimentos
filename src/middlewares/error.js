const Joi = require('joi');

const errorHandler = (err, _req, res, _next) => {
    if (Joi.isError(err)) return res.status(400).json({ message: err.message });
    return res.status(500).json({ err });
};

module.exports = errorHandler;