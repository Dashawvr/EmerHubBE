const { reportStatusService } = require('../services');
const {
    enums: {
        ResponseStatusCodes
    }
} = require('../constants');

module.exports = {
    async createReportStatus(req, res, next) {
        try {

            await reportStatusService.create(req.body);

            res.sendStatus(ResponseStatusCodes.CREATED);

        } catch (error) {
            next(error);
        }
    },
    async updateById(req, res, next) {
        try {
            const {id} = req.status;

            await reportStatusService.update(id, req.body);

            res.sendStatus(ResponseStatusCodes.CREATED);

        } catch (error) {
            next(error);
        }
    },

    async deleteById(req, res, next) {
        try {
            const {id} = req.report;

            await reportStatusService.delete(id);

            res.sendStatus(ResponseStatusCodes.NO_CONTENT);

        } catch (error) {
            next(error);
        }
    },

    async getAllReportStatuses(req, res, next) {
        try {
            const statuses = await reportStatusService.getAll();

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
