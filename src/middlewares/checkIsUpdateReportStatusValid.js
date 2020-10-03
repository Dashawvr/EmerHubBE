const {
    reportStatus: {
        updateReportStatusValidator
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
    const reportStatus = req.body;

    const {error} = updateReportStatusValidator.validate(reportStatus);

    if (error) {
        return next(new ErrorHandler(BAD_REQUEST, error.details[0].message));
    }

    next();
};
