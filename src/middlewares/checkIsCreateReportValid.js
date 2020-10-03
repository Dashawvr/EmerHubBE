const {
    report: {
        createReportValidator
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
    const report = req.body;

    const {error} = createReportValidator.validate(report);

    if (error) {
        return next(new ErrorHandler(BAD_REQUEST, error.details[0].message));
    }

    next();
};
