const { policeStatusService } = require('../services');
const {
    enums: {
        ResponseStatusCodes
    }
} = require('../constants');

module.exports = {
    async createPoliceStatus(req, res, next) {
        try {

            await policeStatusService.create(req.body);

            res.sendStatus(ResponseStatusCodes.CREATED);

        } catch (error) {
            next(error);
        }
    },
    async updatePoliceStatus(req, res, next) {
        try {
            const {id} = req.status;

            await policeStatusService.update(id, req.body);

            res.sendStatus(ResponseStatusCodes.CREATED);

        } catch (error) {
            next(error);
        }
    },

    async deletePoliceStatus(req, res, next) {
        try {
            const {id} = req.report;

            await policeStatusService.delete(id);

            res.sendStatus(ResponseStatusCodes.NO_CONTENT);

        } catch (error) {
            next(error);
        }
    },

    async getAllPoliceStatuses(req, res, next) {
        try {
            const statuses = await policeStatusService.getAll();

            res.json({
                data: statuses
            });

        } catch (error) {
            next(error);
        }
    },

    getById(req, res, next) {
        try {
            const status = req.status;

            res.json({
                data: status
            });

        } catch (error) {
            next(error);
        }
    }
}
