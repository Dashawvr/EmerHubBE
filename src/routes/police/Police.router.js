const express = require('express');
const {
    policeController: {
        createPolice,
        updatePolice,
        deletePolice,
        getAllPolice,
        getById
    }
} = require('../../controllers');
const {
    checkIsPoliceExistsMiddleware,
    checkIsPoliceStatusExistsMiddleware,
    checkIsCreatePoliceValid,
    checkIsUpdatePoliceValid
} = require('../../middlewares');

const router = express.Router();

router.post('/', checkIsPoliceStatusExistsMiddleware, checkIsCreatePoliceValid, createPolice);
router.get('/', getAllPolice);

router.use('/:police_id', checkIsPoliceExistsMiddleware);
router.get('/:police_id', getById);
router.patch('/:police_id', checkIsUpdatePoliceValid, updatePolice);
router.delete('/:police_id', deletePolice);

module.exports = router
