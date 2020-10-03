const {
    models: {
        ReportStatusModel
    }
} = require('../db');

module.exports = {
    create(status) {
        return ReportStatusModel.create(status);
    },
    update(id, updateFields) {
        return ReportStatusModel.update(updateFields, {
            where: {id}
        });
    },
    delete(id) {
        return ReportStatusModel.destroy({
            where: {id}
        });
    },
    getAll() {
        return ReportStatusModel.findAndCountAll();
    },
    getById(id) {
        return ReportStatusModel.findOne({
            where: {id}
        });
    }
}
