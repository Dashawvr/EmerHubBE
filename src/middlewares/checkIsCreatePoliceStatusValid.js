const {
    policeStatus: {
        createPoliceStatusValidator
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
    const policeStatus = req.body;

    const {error} = createPoliceStatusValidator.validate(policeStatus);

    if (error) {
        return next(new ErrorHandler(BAD_REQUEST, error.details[0].message));
    }

    next();
};
