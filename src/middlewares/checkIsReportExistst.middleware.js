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
const {reportService} = require('../services');

module.exports = async (req, res, next) => {
    try {
        const {report_id} = req.params;

        if (!report_id) {
            return next();
        }

        const {error} = idValidator.validate(+report_id);

        if (error) {
            return next(
                new ErrorHandler(BAD_REQUEST, message, code));
        }

        const report = await reportService.getById(+report_id);

        if (!report) {
            return next(new ErrorHandler(NOT_FOUND, message, code));
        }

        req.report = report;
        next();

    } catch (error) {
        next(error);
    }
};
