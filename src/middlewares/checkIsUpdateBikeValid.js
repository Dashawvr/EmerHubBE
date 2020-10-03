const {
    bike: {
        updateBikeValidator
    }
} = require('../validators');
const {
    enums: {
        ResponseStatusCodes: {
            BAD_REQUEST
        }
    }
} = require('../constants');

module.exports = (req, res, next) => {
    const bike = req.body;

    const {error} = updateBikeValidator.validate(bike);

    if (error) {
        return next(new ErrorHandler(BAD_REQUEST, error.details[0].message));
    }

    next();
};
