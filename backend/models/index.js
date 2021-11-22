const { DataTypes } = require('sequelize');
const { db } = require('./../sequelize');

const HolidayModel = require('./holiday');
const PaymentModel = require('./payment');
const PlatformModel = require('./platform');
const SubscriptionModel = require('./subscription');
const UserModel = require('./user');

const User = UserModel(db, DataTypes);
const Holiday = HolidayModel(db, DataTypes);
const Platform = PlatformModel(db, DataTypes);
const Payment = PaymentModel(db, DataTypes);
const Subscription = SubscriptionModel(db, DataTypes);

User.associate(db.models)
Holiday.associate(db.models);
Platform.associate(db.models);
Payment.associate(db.models);
Subscription.associate(db.models);

module.exports = {
  User,
  Holiday,
  Platform,
  Payment,
  Subscription,
}
