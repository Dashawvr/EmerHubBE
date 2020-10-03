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
const { bikeOwnerService } = require('../services');

module.exports =  async (req, res, next) => {
    try {
        const {bikeOwner_id} = req.body.bikeOwner_id ? req.body : req.params;

        if (!bikeOwner_id) {
            return next();
        }

        const {error} = idValidator.validate(+bikeOwner_id);

        if (error) {
            return next(
                new ErrorHandler(BAD_REQUEST, message, code));
        }

        const bikeOwner = await bikeOwnerService.getById(+bikeOwner_id);

        if (!bikeOwner) {
            return next(new ErrorHandler(NOT_FOUND, message, code));
        }

        req.bikeOwner = bikeOwner;
        next();

    } catch (error) {
        next(error);
    }
};
