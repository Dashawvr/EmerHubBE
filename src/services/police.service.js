const {
    models: {
        PoliceModel,
        PoliceStatusModel
    }
} = require('../db');

module.exports = {
    create(police) {
        return PoliceModel.create(police);
    },
    update(id, updateFields) {
        return PoliceModel.update(updateFields, {
            where: {id}
        });
    },
    delete(id) {
        return PoliceModel.destroy({
            where: {id}
        });
    },
    getAll() {
        return PoliceModel.findAndCountAll();
    },
    getById(id) {
        return PoliceModel.findOne({
            where: {id}
        });
    },
    getByStatusId(id) {
        return PoliceModel.findOne({
            where: {status_id: id}
        });
    },
    getFirstFree() {
        return PoliceModel.findOne({
            include: {
                model: PoliceStatusModel,
                where: {status: 'free'}
            }
        });
    }
}
