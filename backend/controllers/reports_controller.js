const moment = require("moment");
const yup = require("yup");
const { Controller } = require("./base_controller");
const { User, Subscription, Payment, Platform, Holiday } = require("./../models");
const user = require("../models/user");

class ReportController extends Controller {
  constructor() {
    super();
    this.name = 'report';
  }

  routes() {
    this.router.get(
      '/future_cash_flow',
      (req, res, next) =>
        this.future_cash_flow(req, res, next),
    );


    return this.router;
  }

  async future_cash_flow(req, res, next){
    try {
      const users = await this._loadUsers();
      return Controller.ok(res, null, users_with_data);
    } catch (error) {
      return next(error);
    }
  }

  async _calculate(users, date) {
    const total = 0;
    users.forEach(user => {
      const total_user = 0;
      const total_subscription = user.Subscriptions.reduce((i, s) => Number(s.Platform.monthly_price) + i, 0);
      // We are assuming that we only care for users with a payment
      if (!user?.Payments?.[0]) {
        continue;
      }
      let next_payment = user.is_biweekly ? next_payment.add(15, 'days') : next_payment.add(1, 'month') ;

      while(next_payment.isBefore(date)) {
        next_payment = user.is_biweekly ? next_payment.add(15, 'days') : next_payment.add(1, 'month');
        total_user = total_user + total_subscription;
      }

      total = total + total_user;
    });

    return total;
  }

  async _loadUsers() {
    const users = await User.findAll({
      include: [
        { model: Subscription, attributes: ['PlatformId'] , include: [
          { model: Platform, attributes: ['name', 'monthly_price'] }
        ] },
        { model: Payment, attributes: ['date', 'amount'], limit: 1, order: [['date', 'ASC']] },
      ],
    });

    return users
  }

};

const controller = new ReportController();
module.exports = controller;
