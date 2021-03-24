const {
    bike: {
        createBikeValidator
    }
} = require('../validators');
const {
    enums: {
        ResponseStatusCodes: {
            BAD_REQUEST
        }
    }
} = require('../constants');
const {ErrorHandler} = require('../errors');

module.exports = (req, res, next) => {

    const bike = req.body;

    const {error} = createBikeValidator.validate(bike);

    if (error) {
        return next(new ErrorHandler(BAD_REQUEST, error.details[0].message));
    }

    next();
};
