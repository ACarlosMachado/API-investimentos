const Joi = require('joi');

const contaSchema = Joi.object({
    codCliente: Joi.number().min(4).required().messages({
        'string.min': '"codCliente" length must be at least 4 characters long',
        'string.required': '"codCliente" is required',
    }),
    valor: Joi.number().min(1).required().messages({
        'number.min': '"valor" has to be greater than 0',
        'number.required': '"valor" is required'
    })
});

const validaConta = (req, _res, next) => {
  const { error } = contaSchema.validate(req.body);
  if (error) return next(error);
  next();
};

module.exports = { validaConta };
