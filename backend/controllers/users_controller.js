const moment = require("moment");
const { Op } = require('sequelize')
const { Controller } = require("./base_controller");
const { User, Subscription, Payment, Platform, Holiday } = require("./../models");

const _validateDate = (holidays, next_date) => {
  let date = next_date.clone();

  while(date.isoWeekday() == 6 || date.isoWeekday() == 7) {
    date = date.add(1, 'day');
  }

  while(holidays.find((holiday) => holiday.isSame(date))) {
    date = date.add(1, 'day');
  }

  return date;
}
class UserController extends Controller {
  constructor() {
    super();
    this.name = 'user';
  }

  routes() {
    this.router.get(
      '/',
      this.loadHolidays(),
      (req, res, next) =>
        this.find(req, res, next),
    );

    this.router.get(
      '/:id',
      this.loadHolidays(),
      this.loadUser(),
      (req, res, next) =>
        this.findOne(req, res, next),
    );

    this.router.get(
      '/:id/payments',
      this.loadHolidays(),
      this.loadUser(),
      (req, res, next) =>
        this.payments(req, res, next),
    );

    this.router.get(
      '/:id/next_payment',
      this.loadHolidays(),
      this.loadUser(),
      (req, res, next) =>
        this.nextPayment(req, res, next),
    );

    return this.router;
  }

  async find(req, res, next){
    try {
      const users = await User.findAll({
        include: [
          { model: Subscription, attributes: ['PlatformId'] , include: [
            {model: Platform, attributes: ['name', 'monthly_price']}
          ] },
          { model: Payment, attributes: ['date', 'amount'], order: [['date', 'ASC']] },
        ],
      });
      const users_with_data = users.map((u) => this._mapUsers(req.session.holidays, u));
      return Controller.ok(res, null, users_with_data);
    } catch (error) {
      return next(error);
    }
  }

  findOne(req, res, next) {
    try {
      const user = req.session.user;
      return Controller.ok(res, null, user);
    } catch (error) {
      return next(error);
    }
  }

  async payments(req, res, next) {
    try {
      const user = req.session.user;
      const payments = await user.getPayments({ attributes: ['amount', 'date'], order: [['date', 'DESC']] })
      return Controller.ok(res, null, payments);
    } catch (error) {
      return next(error);
    }
  }

  async nextPayment(req, res, next) {
    try {
      const user = req.session.user;
      if (!user?.Payments?.[0]?.date) {
        return Controller.badRequest(res, null);
      }
      const last_payment = moment(user.Payments[0].date);
      const next_payment = user.is_biweekly ? last_payment.add(15, 'days') : last_payment.add(1, 'month') ;
      return Controller.ok(res, null, _validateDate(req.session.holidays, next_payment));
    } catch (error) {
      return next(error);
    }
  }

  loadUser() {
    return async (req, res, next) => {
      try {
        const user = await User.findByPk(req.params.id, {
          include: [
            { model: Subscription, attributes: ['PlatformId'] , include: [
              {model: Platform, attributes: ['name', 'monthly_price']}
            ] },
            { model: Payment, limit: 1, order: [['date', 'DESC']] },
          ],
        });
        if (!user) {
          return Controller.notFound(res);
        }
        req.session.user = user;
        return next();
      } catch (error) {
        return next(error);
      }
    };
  }

  loadHolidays() {
    return async (req, res, next) => {
      try {
        req.session.holidays = await Holiday.toMoment();
        return next();
      } catch (error) {
        return next(error);
      }
    };
  }

  _mapUsers(holidays, u) {
    const user = u.get({plain: true})
    if (user?.Payments?.[0]?.date) {
      const last_payment = moment(user.Payments[0].date);
      const next_payment = user.is_biweekly ? last_payment.add(15, 'days') : last_payment.add(1, 'month') ;
      user['next_payment'] = _validateDate(holidays, next_payment);
      user['next_payment_amount'] = user.Subscriptions.reduce((i, s) => Number(s.Platform.monthly_price) + i, 0);
    }

    return user;
  }


};

const controller = new UserController();
module.exports = controller;
