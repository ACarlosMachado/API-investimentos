const Joi = require('joi');

const ativoSchema = Joi.string().min(4).required().messages({
        'string.min': '"codAtivo" length must be at least 5 characters long',
        'string.required': '"codAtivo" is required',
    });

const validaAtivo = (req, _res, next) => {
  const { id } = req.params;
  const { error } = ativoSchema.validate(id);
  if (error) return next(error);
  next();
};

module.exports = { validaAtivo };