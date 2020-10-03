const express = require('express');
const {
    bikeOwnerController: {
        createBikeOwner,
        updateBikeOwner,
        deleteBikeOwner,
        getAllBikeOwners,
        getById
    }
} = require('../../controllers');
const {
    checkIsBikeOwnerExistsMiddleware,
    checkIsUpdateBikeOwnerValid,
    checkIsCreateBikeOwnerValid
} = require('../../middlewares');

const router = express.Router();

router.post('/', checkIsCreateBikeOwnerValid, createBikeOwner);
router.get('/', getAllBikeOwners);

router.use('/:bikeOwner_id', checkIsBikeOwnerExistsMiddleware);
router.get('/:bikeOwner_id', getById);
router.patch('/:bikeOwner_id', checkIsUpdateBikeOwnerValid, updateBikeOwner);
router.delete('/:bikeOwner_id', deleteBikeOwner);

module.exports = router
