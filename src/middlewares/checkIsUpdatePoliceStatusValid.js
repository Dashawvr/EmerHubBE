const {
    policeStatus: {
        updatePoliceStatusValidator
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
    const policeStatus = req.body;

    const {error} = updatePoliceStatusValidator.validate(policeStatus);

    if (error) {
        return next(new ErrorHandler(BAD_REQUEST, error.details[0].message));
    }

    next();
};
