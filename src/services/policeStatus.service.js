const {
    models: {
        PoliceStatusModel
    }
} = require('../db');

module.exports = {
    create(status) {
        return PoliceStatusModel.create(status);
    },
    update(id, updateFields) {
        return PoliceStatusModel.update(updateFields, {
            where: {id}
        });
    },
    delete(id) {
        return PoliceStatusModel.destroy({
            where: {id}
        });
    },
    getAll() {
        return PoliceStatusModel.findAndCountAll();
    },
    getById(id) {
        return PoliceStatusModel.findOne({
            where: {id}
        });
    }
}
