'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Subscription);
      User.hasMany(models.Payment);
    }
  };
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    is_biweekly: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
    underscored: true,
    tableName: 'Users',
  });
  return User;
};
