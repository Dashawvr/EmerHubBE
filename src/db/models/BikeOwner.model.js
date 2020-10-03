const {Model, DataTypes} = require('sequelize');

const {sequelize} = require('../../configs');
const {
    enums: {
        dataBaseModel: {
            BIKE_OWNER_MODEL_NAME
        }
    }
} = require('../../constants');

class BikeOwnerModel extends Model {
}

module.exports = BikeOwnerModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: BIKE_OWNER_MODEL_NAME,
    tableName: BIKE_OWNER_MODEL_NAME
})

module.exports = BikeOwnerModel;

