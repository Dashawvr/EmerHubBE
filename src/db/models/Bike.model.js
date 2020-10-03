const {Model, DataTypes} = require('sequelize');

const {sequelize} = require('../../configs');
const {
    enums: {
        dataBaseModel: {
            BIKE_MODEL_NAME
        }
    }
} = require('../../constants');

class BikeModel extends Model {
}

BikeModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: BIKE_MODEL_NAME,
    tableName: BIKE_MODEL_NAME
})

module.exports = BikeModel;

