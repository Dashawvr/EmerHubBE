const { bikeService } = require('../services');
const {
    enums: {
        ResponseStatusCodes
    }
} = require('../constants');

module.exports = {
    async createBike(req, res, next) {
        try {

            await bikeService.create(req.body);

            res.sendStatus(ResponseStatusCodes.CREATED);

        } catch (error) {
            next(error);
        }
    },
    async updateBike(req, res, next) {
        try {
            const {id} = req.bike;

            await bikeService.update(id, req.body);

            res.sendStatus(ResponseStatusCodes.CREATED);

        } catch (error) {
            next(error);
        }
    },

    async deleteBike(req, res, next) {
        try {
            const {id} = req.bike;

            await bikeService.delete(id);

            res.sendStatus(ResponseStatusCodes.NO_CONTENT);

        } catch (error) {
            next(error);
        }
    },

    async getAllBikes(req, res, next) {
        try {
            const {id} = req.query;
            const bikes = await bikeService.getAll(id);

            res.json({
                data: bikes
            });

        } catch (error) {
            next(error);
        }
    },

    getById(req, res, next) {
        try {
            const bike = req.bike;

            res.json({
                data: bike
            });

        } catch (error) {
            next(error);
        }
    }
}
