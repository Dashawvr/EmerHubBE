const {Model, DataTypes} = require('sequelize');

const {sequelize} = require('../../configs');
const {
    enums: {
        dataBaseModel: {
            REPORT_MODEL_NAME
        }
    }
} = require('../../constants');

class ReportModel extends Model {
}

ReportModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: REPORT_MODEL_NAME,
    tableName: REPORT_MODEL_NAME
})

module.exports = ReportModel;

