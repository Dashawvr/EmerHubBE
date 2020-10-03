const Joi = require('joi');

module.exports = Joi.object({
    model: Joi.string().trim(),
    color: Joi.string().trim(),
    bike_id: Joi.number().integer().positive()
});
