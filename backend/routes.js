const { Router } = require('express');

const apiV1 = () => {
  const router = Router();
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
