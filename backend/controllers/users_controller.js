const moment = require("moment");
const { Controller } = require("./base_controller");
const { User, Profile, Subscription, Payment, Platform, Holiday } = require("./../models");

class UserController extends Controller {
  constructor() {
    super();
    this.name = 'user';
  }

  routes() {
    this.router.get(
      '/',
      (req, res, next) =>
        this.find(req, res, next),
    );

    this.router.get(
      '/:id',
      this.loadUser(),
      (req, res, next) =>
        this.findOne(req, res, next),
    );

    this.router.get(
      '/:id/payments',
      this.loadUser(),
      (req, res, next) =>
        this.payments(req, res, next),
    );

    this.router.get(
      '/:id/next_payment',
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
      const users_with_data = users.map(this._mapUsers);
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
      return Controller.ok(res, null, next_payment);
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

  _mapUsers(u) {
    const user = u.get({plain: true})
    if (user?.Payments?.[0]?.date) {
      const last_payment = moment(user.Payments[0].date);
      const next_payment = user.is_biweekly ? last_payment.add(15, 'days') : last_payment.add(1, 'month') ;
      user['next_payment'] = next_payment;
      user['next_payment_amount'] = user.Subscriptions.reduce((i, s) => Number(s.Platform.monthly_price) + i, 0);
    }

    return user;
  }


};

const controller = new UserController();
module.exports = controller;
