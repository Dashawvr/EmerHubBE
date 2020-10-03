const {policeService} = require('../services');
const {
    enums: {
        ResponseStatusCodes
    }
} = require('../constants');

module.exports = {
    async createPolice(req, res, next) {
        try {
            await policeService.create(req.body);

            res.sendStatus(ResponseStatusCodes.CREATED);

        } catch (error) {
            next(error);
        }
    },
    async updatePolice(req, res, next) {
        try {
            const {id} = req.police;

            await policeService.update(id, req.body);

            res.sendStatus(ResponseStatusCodes.CREATED);

        } catch (error) {
            next(error);
        }
    },

    async deletePolice(req, res, next) {
        try {
            const {id} = req.police;

            await policeService.delete(id);

            res.sendStatus(ResponseStatusCodes.NO_CONTENT);

        } catch (error) {
            next(error);
        }
    },

    async getAllPolice(req, res, next) {
        try {
            const polices = await policeService.getAll();

            res.json({
                data: polices
            });

        } catch (error) {
            next(error);
        }
    },

    getById(req, res, next) {
        try {
            const police = req.police;

            res.json({
                data: police
            });

        } catch (error) {
            next(error);
        }
    }
}
