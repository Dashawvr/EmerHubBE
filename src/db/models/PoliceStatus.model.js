const {Model, DataTypes} = require('sequelize');

const {sequelize} = require('../../configs');
const {
    enums: {
        dataBaseModel: {
            POLICE_STATUS_MODEL_NAME
        }
    }
} = require('../../constants');

class PoliceStatusModel extends Model {
}

PoliceStatusModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: POLICE_STATUS_MODEL_NAME,
    tableName: POLICE_STATUS_MODEL_NAME
})

module.exports = PoliceStatusModel;

