const {idValidator} = require('../validators');
const {
    enums: {
        ResponseStatusCodes: {
            BAD_REQUEST,
            NOT_FOUND
        }
    }
} = require('../constants');
const {
    errors: {
        BAD_REQUEST_WRONG_PARAMS: {
            message,
            code
        }
    },
    ErrorHandler
} = require('../errors');
const {bikeService} = require('../services');

module.exports = async (req, res, next) => {
    try {
        const {bike_id} = req.body.bike_id ? req.body : req.params;

        if (!bike_id) {
            return next();
        }

        const {error} = idValidator.validate(+bike_id);

        if (error) {
            return next(
                new ErrorHandler(BAD_REQUEST, message, code));
        }

        const bike = await bikeService.getById(+bike_id);

        if (!bike) {
            return next(new ErrorHandler(NOT_FOUND, message, code));
        }

        req.bike = bike;
        next();

    } catch (error) {
        next(error);
    }
};
