const Joi = require('joi');

module.exports = Joi.object({
    model: Joi.string().trim().required(),
    color: Joi.string().trim().required(),
    bikeOwner_id: Joi.number().integer().positive().required()
});
