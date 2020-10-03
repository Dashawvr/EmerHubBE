const express = require('express');
const cors = require('cors');
const dotEnv = require('dotenv');
dotEnv.config();

const {
    errors: {
        SERVER_UNKNOWN_ERROR: {
            message,
            code
        }
    }
} = require('./errors');
const {
    enums: {
        ResponseStatusCodes: {
            SERVER_ERROR
        }
    }
} = require('./constants');
const {corsOptions} = require('./configs');


const {
    associations: {
        initDBAssociations
    }
} = require('./db');
const {apiRouter, notFound} = require('./routes');

const app = express();

initDBAssociations();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors(corsOptions))

app.use('/api', apiRouter);
app.use('*', notFound);
app.use((err, req, res, next) => {

    if (err.parent) {
        err.message = err.parent.sqlMessage;
    }

    res
        .status(err.status || SERVER_ERROR)
        .json({
            message: err.message || message,
            code: err.code || code
        });
})


module.exports = app;
