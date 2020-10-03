const Joi = require('joi');

module.exports = Joi.object({
    name: Joi.string().trim(),
    surname: Joi.string().trim(),
    status_id: Joi.number().integer().positive(),
    report_id: Joi.number().integer().positive()
});
