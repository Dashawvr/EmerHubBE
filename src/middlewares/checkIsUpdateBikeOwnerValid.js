const {
    bikeOwner: {
        updateBikeOwnerValidator
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
    const bikeOwner = req.body;

    const {error} = updateBikeOwnerValidator.validate(bikeOwner);

    if (error) {
        return next(new ErrorHandler(BAD_REQUEST, error.details[0].message));
    }

    next();
};
