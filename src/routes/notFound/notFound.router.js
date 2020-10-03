const express = require('express');

const {
    notFoundController: {
        all
    }
} = require('../../controllers');

const router = express.Router();

router.all('*', all)

module.exports = router;
