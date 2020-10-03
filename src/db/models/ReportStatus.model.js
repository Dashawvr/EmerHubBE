const { Model, DataTypes } = require('sequelize');

const { sequelize } = require('../../configs');
const {
    enums: {
        dataBaseModel: {
            REPORT_STATUS_MODEL_NAME
        }
    }
} = require('../../constants');

class ReportStatusModel extends Model {
}

ReportStatusModel.init({
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
    modelName: REPORT_STATUS_MODEL_NAME,
    tableName: REPORT_STATUS_MODEL_NAME
})


module.exports = ReportStatusModel;

