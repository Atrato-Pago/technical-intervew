'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
    underscored: true
  });
  return Payment;
};