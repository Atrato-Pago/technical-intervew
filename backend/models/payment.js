'use strict';
const {
  Model
} = require('sequelize');

const { User } = require('.');

module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      Payment.belongsTo(models.User)
    }
  };
  Payment.init({
    amount: DataTypes.DECIMAL,
    date: DataTypes.DATE,
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id',
      }
    }
  }, {
    sequelize,
    modelName: 'Payment',
    underscored: true,
    tableName: 'Payments'
  });
  return Payment;
};
