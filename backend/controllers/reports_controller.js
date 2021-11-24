const moment = require("moment");
const yup = require("yup");
const { Controller } = require("./base_controller");
const { User, Subscription, Payment, Platform, Holiday } = require("./../models");
const { Parser } = require('json2csv');

class ReportController extends Controller {
  constructor() {
    super();
    this.name = 'reports';
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

      let schema = yup.object().shape({
        from: yup.date().required(),
        to: yup.date().required()
      });

      try {
        await schema.validate(req.query);
      } catch(e) {
        return Controller.badRequest(res, null);
      }

      const from = moment(req.query.from);
      const to = moment(req.query.to);

      if (!from.isValid() || !to.isValid()) {
        return Controller.badRequest(res, null);
      }

      const users = await this._loadUsers();
      const holidays = await Holiday.toMoment();

      const payments = this._calculate(users, from, to, holidays);

      if (req.query.csv) {
        const data = (new Parser({fields: ['user_id', 'date', 'amount']})).parse(payments);
        return Controller.file(res, data, 'text/csv');
      } else {
        return Controller.ok(res, null, payments);
      }


    } catch (error) {
      return next(error);
    }
  }

  _calculate(users, from, to, holidays) {
    const payments = users.flatMap(user => {
      if(user.Subscriptions.length === 0 ) {
        return [];
      }
      const next_payments = [];
      const total_subscription = user.Subscriptions.reduce((i, s) => Number(s.Platform.monthly_price) + i, 0);

      const last_payment = moment(user?.Payments?.[0]?.date);
      let next_payment;
      if(!last_payment.isBetween(from, to)) {
        next_payment = from.clone().add(1, 'month').startOf('month');
      } else {
        next_payment = user.is_biweekly ? last_payment.add(15, 'days') : last_payment.add(1, 'month') ;
      }

      while(next_payment.isBefore(to)) {
        next_payments.push({
          date: this._validateDate(next_payment, holidays),
          user_id: user.id,
          amount: total_subscription
        })
        next_payment = user.is_biweekly ? next_payment.add(15, 'days') : next_payment.add(1, 'month');
      }

      return next_payments;
    });

    return payments;
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

  _validateDate(next_date, holidays) {
    let date = next_date.clone();

    while(date.isoWeekday() == 6 || date.isoWeekday() == 7) {
      date = date.add(1, 'day');
    }

    while(holidays.find((holiday) => holiday.isSame(date))) {
      date = date.add(1, 'day');
    }

    return date;
  }

};

const controller = new ReportController();
module.exports = controller;
