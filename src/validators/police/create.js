const Joi = require('joi');

module.exports = Joi.object({
    name: Joi.string().trim().required(),
    surname: Joi.string().trim().required(),
    status_id: Joi.number().integer().positive().required(),
    report_id: Joi.number().integer().positive()
});
