const Joi = require('joi');

const ordemSchema = Joi.object({
    codAtivo: Joi.string().min(5).required().messages({
        'string.min': '"codAtivo" length must be at least 5 characters long',
        'string.required': '"codAtivo" is required',
    }),
    codCliente: Joi.number().min(4).required().messages({
        'string.min': '"codCliente" length must be at least 4 characters long',
        'string.required': '"codCliente" is required',
    }),
    qtdeAtivo: Joi.number().min(1).required().messages({
        'string.min': '"qtdeAtivo" has to be greater than 0',
        'number.required': '"qtdeAtivo" is required'
    })
});

const validaOrdem = (req, _res, next) => {
  const { error } = ordemSchema.validate(req.body);
  if (error) return next(error);
  next();
};

module.exports = { validaOrdem };
