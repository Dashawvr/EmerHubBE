const express = require('express');

const {
    bikeController: {
        createBike,
        updateBike,
        deleteBike,
        getAllBikes,
        getById
    }
} = require('../../controllers');
const {
    checkIsBikeExistsMiddleware,
    checkIsBikeOwnerExistsMiddleware,
    checkIsUpdateBikeValid,
    checkIsCreateBikeValid
} = require('../../middlewares');

const router = express.Router();

router.post('/', checkIsBikeOwnerExistsMiddleware, checkIsCreateBikeValid, createBike);
router.get('/', getAllBikes);

router.use('/:bike_id', checkIsBikeExistsMiddleware);

router.get('/:bike_id', getById);
router.patch('/:bike_id', checkIsUpdateBikeValid, updateBike);
router.delete('/:bike_id', deleteBike);

module.exports = router
