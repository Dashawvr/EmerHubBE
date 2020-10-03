const express = require('express');

const {
    bikeOwnerRouter,
    bikeRouter,
    policeRouter,
    reportRouter,
    reportStatusRouter,
    policeStatusRouter
} = require('../../routes');

const router = express.Router();

router.use('/bikeOwner', bikeOwnerRouter);
router.use('/bike', bikeRouter);
router.use('/police', policeRouter);
router.use('/report', reportRouter);
router.use('/reportStatus', reportStatusRouter);
router.use('/policeStatus', policeStatusRouter);


module.exports = router
