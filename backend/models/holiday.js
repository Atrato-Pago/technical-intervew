'use strict';
const moment = require("moment");
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Holiday extends Model {
    static associate(models) {
    }

    static toMoment() {
      return Holiday.findAll({where: { is_active: true }}).map((day) => {
        return moment(day.date);
      })
    }
  };
  Holiday.init({
    date: DataTypes.DATE,
    is_active: DataTypes.BOOLEAN,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Holiday',
    underscored: true,
    tableName: 'Holidays'
  });
  return Holiday;
};
