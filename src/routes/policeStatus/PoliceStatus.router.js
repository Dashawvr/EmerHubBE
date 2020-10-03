const express = require('express');

const {
    policeStatusController: {
        createPoliceStatus,
        updatePoliceStatus,
        deletePoliceStatus,
        getAllPoliceStatuses,
        getById
    }
} = require('../../controllers');
const {
    checkIsPoliceStatusExistsMiddleware,
    checkIsCreatePoliceStatusValid,
    checkIsUpdatePoliceStatusValid
} = require('../../middlewares');

const router = express.Router();


router.post('/', checkIsCreatePoliceStatusValid, createPoliceStatus);
router.get('/', getAllPoliceStatuses);

router.use('/:status_id', checkIsPoliceStatusExistsMiddleware);
router.get('/:status_id', getById);
router.patch('/:status_id', checkIsUpdatePoliceStatusValid, updatePoliceStatus);
router.delete('/:status_id', deletePoliceStatus);

module.exports = router
