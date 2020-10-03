const {Model, DataTypes} = require('sequelize');

const {sequelize} = require('../../configs');
const {
    enums: {
        dataBaseModel: {
            POLICE_MODEL_NAME
        }
    }
} = require('../../constants');

class PoliceModel extends Model {
}

PoliceModel.init({
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
    modelName: POLICE_MODEL_NAME,
    tableName: POLICE_MODEL_NAME
})

module.exports = PoliceModel;
