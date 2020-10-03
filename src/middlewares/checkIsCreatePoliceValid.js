const {
    police: {
        createPoliceValidator
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
    const police = req.body;

    const {error} = createPoliceValidator.validate(police);

    if (error) {
        return next(new ErrorHandler(BAD_REQUEST, error.details[0].message));
    }

    next();
};
