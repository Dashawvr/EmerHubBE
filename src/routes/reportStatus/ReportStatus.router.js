const express = require('express');

const {
    reportStatusController: {
        createReportStatus,
        updateById,
        deleteById,
        getAllReportStatuses,
        getById
    }
} = require('../../controllers');
const {
    checkIsReportStatusExistsMiddleware,
    checkIsCreateReportStatusValid,
    checkIsUpdateReportStatusValid
} = require('../../middlewares');

const router = express.Router();


router.post('/', checkIsCreateReportStatusValid, createReportStatus);
router.get('/', getAllReportStatuses);

router.use('/:status_id', checkIsReportStatusExistsMiddleware);
router.get('/:status_id', getById);
router.patch('/:status_id', checkIsUpdateReportStatusValid, updateById);
router.delete('/:status_id', deleteById);

module.exports = router
