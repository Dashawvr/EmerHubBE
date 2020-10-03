const { bikeOwnerService } = require('../services');
const {
    enums: {
        ResponseStatusCodes
    }
} = require('../constants');

module.exports = {
    async createBikeOwner(req, res, next) {
        try {

            await bikeOwnerService.create(req.body);

            res.sendStatus(ResponseStatusCodes.CREATED);

        } catch (error) {
            next(error);
        }
    },
    async updateBikeOwner(req, res, next) {
        try {
            const {id} = req.bikeOwner;

            await bikeOwnerService.update(id, req.body);

            res.sendStatus(ResponseStatusCodes.CREATED);

        } catch (error) {
            next(error);
        }
    },

    async deleteBikeOwner(req, res, next) {
        try {
            const {id} = req.bikeOwner;

            await bikeOwnerService.delete(id);

            res.sendStatus(ResponseStatusCodes.NO_CONTENT);

        } catch (error) {
            next(error);
        }
    },

    async getAllBikeOwners(req, res, next) {
        try {
            const bikeOwners = await bikeOwnerService.getAll();

            res.json({
                data: bikeOwners
            });

        } catch (error) {
            next(error);
        }
    },

    getById(req, res, next) {
        try {
            const bikeOwner = req.bikeOwner;

            res.json({
                data: bikeOwner
            });

        } catch (error) {
            next(error);
        }
    }
}
