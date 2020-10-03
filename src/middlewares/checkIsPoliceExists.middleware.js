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
const {policeService} = require('../services');

module.exports = async (req, res, next) => {
    try {
        const {police_id} = req.params;

        if (!police_id) {
            return next();
        }

        const {error} = idValidator.validate(+police_id);

        if (error) {
            return next(
                new ErrorHandler(BAD_REQUEST, message, code));
        }

        const police = await policeService.getById(+police_id);

        if (!police) {
            return next(new ErrorHandler(NOT_FOUND, message, code));
        }

        req.police = police;
        next();

    } catch (error) {
        next(error);
    }
};
