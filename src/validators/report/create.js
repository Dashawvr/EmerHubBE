const Joi = require('joi');

module.exports = Joi.object({
    title: Joi.string().trim().required(),
    desc: Joi.string().trim().required(),
    bikeOwner_id: Joi.number().integer().positive().required(),
    bike_id: Joi.number().integer().positive().required(),
    status_id: Joi.number().integer().positive()
});
