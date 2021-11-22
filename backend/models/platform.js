'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Platform extends Model {
    static associate(models) {
      Platform.hasMany(models.Subscription)
    }
  };
  Platform.init({
    name: DataTypes.STRING,
    monthly_price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Platform',
    underscored: true,
    tableName: 'Platforms'
  });
  return Platform;
};
