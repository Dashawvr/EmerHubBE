const Joi = require('joi');

module.exports = Joi.object({
    status: Joi.string().trim()
});
