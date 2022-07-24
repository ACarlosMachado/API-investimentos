const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.required': '"email" is required',
    }),
    senha: Joi.number().min(6).required().messages({
        'number.min': '"senha" has to be greater than 5',
        'number.required': '"senha" is required',
    }),
});

const validaLogin = (req, _res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return next(error);
  next();
};

module.exports = { validaLogin };
