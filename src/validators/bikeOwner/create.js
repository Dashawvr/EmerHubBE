const Joi = require('joi');

module.exports = Joi.object({
    name: Joi.string().trim().required(),
    surname: Joi.string().trim().required()
});
