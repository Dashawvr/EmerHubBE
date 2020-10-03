const { reportService, policeService } = require('../services');
const {
    enums: {
        ResponseStatusCodes
    }
} = require('../constants');

module.exports = {
    async createReport(req, res, next) {
        try {
            const freePolice = await policeService.getFirstFree();

            const report = {
                ...req.body,
                police_id: freePolice.id
            }

            await reportService.create(report);

            res.sendStatus(ResponseStatusCodes.CREATED);

        } catch (error) {
            next(error);
        }
    },
    async updateReport(req, res, next) {
        try {
            const {id} = req.report;

            await reportService.update(id, req.body);

            res.sendStatus(ResponseStatusCodes.CREATED);

        } catch (error) {
            next(error);
        }
    },

    async deleteReport(req, res, next) {
        try {
            const {id} = req.report;

            await reportService.delete(id);

            res.sendStatus(ResponseStatusCodes.NO_CONTENT);

        } catch (error) {
            next(error);
        }
    },

    async getAllReports(req, res, next) {
        try {
            const reports = await reportService.getAll();

            res.json({
                data: reports
            });

        } catch (error) {
            next(error);
        }
    },

    getById(req, res, next) {
        try {
            const report = req.report;

            res.json({
                data: report
            });

        } catch (error) {
            next(error);
        }
    }
}
