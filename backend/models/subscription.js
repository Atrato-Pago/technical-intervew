'use strict';
const { Model } = require('sequelize');
const { User, Platform } = require('.');

module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {
    static associate(models) {
      Subscription.belongsTo(models.Platform);
      Subscription.belongsTo(models.User);
    }
  };
  Subscription.init({
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id',
      }
    },
    platform_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Platform,
        key: 'id',
      }
    }
  }, {
    sequelize,
    modelName: 'Subscription',
    underscored: true,
    tableName: 'Subscriptions',
  });
  return Subscription;
};
