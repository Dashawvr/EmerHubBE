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
const { policeStatusService } = require('../services');

module.exports = async (req, res, next) => {
    try {
        const {status_id} = req.body.status_id ? req.body : req.params;

        if (!status_id) {
            return next();
        }

        const {error} = idValidator.validate(+status_id);

        if (error) {
            return next(
                new ErrorHandler(BAD_REQUEST, message, code));
        }

        const status = await policeStatusService.getById(+status_id);

        if (!status) {
            return next(new ErrorHandler(NOT_FOUND, message, code));
        }

        req.status = status;
        next();

    } catch (error) {
        next(error);
    }
};
