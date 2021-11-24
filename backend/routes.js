const { Router } = require('express');
const UserController = require('./controllers/users_controller');
const ReportController = require('./controllers/reports_controller');

const apiV1 = () => {
  const router = Router();

  router.use(`/${UserController.name}`, UserController.routes());
  router.use(`/${ReportController.name}`, ReportController.routes());
  return router;
};

const routes = function(app) {
  app.use('/api/v1/', apiV1());

  app.get('/*', (req, res) => {
    return res.status(405).send({
      status: 405,
      message: "Method not allowed",
    });
  });

  app.post('/*', (req, res) => {
    return res.status(405).send({
      status: 405,
      message: "Method not allowed",
    });
  });

  app.use((err, req, res, next) => {
    console.log(err);
    return res.status(500).send({
      status: 500,
      message: "Server Error",
    });
  });
}


module.exports = {
  routes
}
