const {
    ErrorHandler,
    errors: {
        NOT_FOUND_ROUTE: {
            message,
            code
        }
    }
} = require('../errors');
const {
    enums: {
        ResponseStatusCodes: {
            NOT_FOUND
        }
    }
} = require('../constants');

module.exports = {
    all(req, res, next) {
        throw new ErrorHandler(NOT_FOUND, message, code)
    }
}
