const config = require('./global.config');
const {
    enums: {
        ResponseStatusCodes: {
            FORBIDDEN
        }
    }
} = require('../constants');
const {
    errors: {
        CORS_NOT_ALLOWED: {
            message,
            code
        }
    },
    ErrorHandler
} = require('../errors');

module.exports = {
    origin: (origin, callback) => {
        const whiteList = config.FRONTEND_URL.split(';');

        if (!origin) {
            return callback(new ErrorHandler(
                FORBIDDEN,
                message,
                code
            ), false);
        }

        if (!whiteList.includes(origin)) {
            return callback(new ErrorHandler(
                FORBIDDEN,
                message,
                code
            ), false);
        }
        callback(null, true);
    }
}
