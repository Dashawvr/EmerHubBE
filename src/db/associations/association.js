const {
    BikeOwnerModel,
    BikeModel,
    ReportModel,
    ReportStatusModel,
    PoliceModel,
    PoliceStatusModel
} = require('../models');

module.exports = () => {

    BikeOwnerModel.hasMany(ReportModel, {foreignKey: 'bikeOwner_id'});
    BikeOwnerModel.hasMany(BikeModel, {foreignKey: 'bikeOwner_id'});

    BikeModel.hasOne(ReportModel, {foreignKey: 'bike_id'});

    ReportModel.hasOne(PoliceModel, {foreignKey: 'report_id'});
    ReportModel.belongsTo(BikeOwnerModel, {foreignKey: 'bikeOwner_id'});
    ReportModel.belongsTo(BikeModel, {foreignKey: 'bike_id'});
    ReportModel.belongsTo(ReportStatusModel, {foreignKey: 'status_id'});

    ReportStatusModel.hasMany(ReportModel, {foreignKey: 'status_id'});

    PoliceModel.belongsTo(ReportModel, {foreignKey: 'report_id'});
    PoliceModel.belongsTo(PoliceStatusModel, {foreignKey: 'status_id'});

    PoliceStatusModel.hasMany(PoliceModel, {foreignKey: 'status_id'});

}
