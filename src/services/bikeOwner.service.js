const {
    models: {
        BikeOwnerModel
    }
} = require('../db');

module.exports = {
    create(bikeOwner) {
        return BikeOwnerModel.create(bikeOwner);
    },
    update(id, updateFields) {
        return BikeOwnerModel.update(updateFields, {
            where: {id}
        });
    },
    delete(id) {
        return BikeOwnerModel.destroy({
            where: {id}
        });
    },
    getAll() {
        return BikeOwnerModel.findAndCountAll();
    },
    getById(id) {
        return BikeOwnerModel.findOne({
            where: {id}
        });
    }
}
