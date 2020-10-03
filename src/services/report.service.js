const {
    models: {
        ReportModel
    }
} = require('../db');

module.exports = {
    create(report) {
        return ReportModel.create(report);
    },
    update(id, updateFields) {
        return ReportModel.update(updateFields, {
            where: {id}
        });
    },
    delete(id) {
        return ReportModel.destroy({
            where: {id}
        });
    },
    getAll() {
        return ReportModel.findAndCountAll();
    },
    getById(id) {
        return ReportModel.findOne({
            where: {id}
        });
    }
}
