'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Holiday extends Model {
    static associate(models) {
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
