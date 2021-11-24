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
            {model: Platform, attributes: ['name']}
          ] },
          { model: Payment, attributes: ['date', 'amount'], order: [['date', 'ASC']] },
        ],
      });
      return Controller.ok(res, null, users);
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
      const last_payment = user.Payments[0].date;
      const holidays = await Holiday.findAll({where: { is_active: true }});
      return Controller.ok(res, null, last_payment);
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
              {model: Platform, attributes: ['name']}
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


};

const controller = new UserController();
module.exports = controller;
