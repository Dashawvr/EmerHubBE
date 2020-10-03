const {
    models: {
        BikeModel
    }
} = require('../db');

module.exports = {
    create(bike) {
        return BikeModel.create(bike);
    },
    update(id, updateFields) {
        return BikeModel.update(updateFields, {
            where: {id}
        });
    },
    delete(id) {
        return BikeModel.destroy({
            where: {id}
        });
    },
    getAll(bikeOwner_id) {
        const options = {};
        if (bikeOwner_id) {
            options.where = {
                bikeOwner_id
            }
        }
        return BikeModel.findAndCountAll(options);
    },
    getById(id) {
        return BikeModel.findOne({
            where: {id}
        });
    }
}
