const Joi = require('joi');

module.exports = Joi.object({
    title: Joi.string().trim(),
    desc: Joi.string().trim(),
    bikeOwner_id: Joi.number().integer().positive(),
    bike_id: Joi.number().integer().positive(),
    status_id: Joi.number().integer().positive()
});
