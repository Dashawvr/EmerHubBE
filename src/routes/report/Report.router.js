const express = require('express');

const {
    reportController: {
        createReport,
        updateReport,
        deleteReport,
        getAllReports,
        getById
    }
} = require('../../controllers');
const {
    checkIsReportExistsMiddleware,
    checkIsBikeOwnerExistsMiddleware,
    checkIsBikeExistsMiddleware,
    checkIsReportStatusExistsMiddleware,
    checkIsCreateReportValid,
    checkIsUpdateReportValid
} = require('../../middlewares');

const router = express.Router();

router.post('/',
    checkIsCreateReportValid,
    checkIsBikeOwnerExistsMiddleware,
    checkIsBikeExistsMiddleware,
    checkIsReportStatusExistsMiddleware,
    createReport);
router.get('/', getAllReports);

router.use('/:report_id', checkIsReportExistsMiddleware);
router.get('/:report_id', getById);
router.patch('/:report_id', checkIsUpdateReportValid, updateReport);
router.delete('/:report_id', deleteReport);

module.exports = router

