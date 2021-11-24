const { Router } = require('express');
const { isNullOrUndefined } = require('util');

class Controller {
  name; // Name used for the route, all lowercase
  router;

  constructor() {
    this.router = Router();
    // Initialize req.session
    this.router.use((req, res, next) => {
      if (req.session == null) {
        req.session = {};
      }
      return next();
    });
  }

  routes() {
    // Example routes
    // WARNING: Routes without policies
    // You should add policies before your method
    log.warn('You should add policies before your method');
    return this.router;
  }

  static ok(
    res,
    message = null,
    data = {},
    count = null,
  ) {
    if (isNullOrUndefined(message)) {
      message = 'ok';
    }
    if (!isNullOrUndefined(count)) {
      return res
        .set('Content-Count', String(count))
        .status(200)
        .json({
          status: 200,
          message,
          data,
        });
    }
    return res.status(200).json({
      status: 200,
      message,
      data,
    });
  }

  static created(res, message = null, data = {}) {
    if (isNullOrUndefined(message)) {
      message = 'Created';
    }
    return res.status(201).json({
      status: 201,
      message,
      data,
    });
  }

  static noContent(res) {
    return res.status(204).end();
  }

  static redirect(res, url) {
    return res.redirect(url);
  }

  static customErrorCode(
    res,
    statu = null,
    message = null,
    data = {},
  ) {
    if (isNullOrUndefined(message)) {
      message = 'Bad Request';
    }
    return res.status(400).json({
      status,
      message,
      data,
    });
  }

  static badRequest(
    res,
    message = null,
    data = {},
  ) {
    if (isNullOrUndefined(message)) {
      message = 'Bad Request';
    }
    if (!isNullOrUndefined(message) && Array.isArray(data)) {
      message = data[0];
    }
    return res.status(400).json({
      status: 400,
      message,
      data,
    });
  }

  static unauthorized(
    res,
    message = null,
    data = {},
  ) {
    if (isNullOrUndefined(message)) {
      message = 'Unauthorized';
    }
    return res.status(401).json({
      status: 401,
      message,
      data,
    });
  }

  static forbidden(
    res,
    message = null,
    data = {},
  ) {
    if (isNullOrUndefined(message)) {
      message = 'Forbidden';
    }
    return res.status(403).json({
      status: 403,
      message,
      data,
    });
  }

  static notFound(
    res,
    message = null,
    data = {},
  ) {
    if (isNullOrUndefined(message)) {
      message = 'Not Found';
    }
    return res.status(404).json({
      status: 404,
      message,
      data,
    });
  }

  static serverError(res, message = null, data) {
    // TODO: consideer option for sending err on debug mode
    log.error(data);
    try {
      bugsnagClient.notify(data);
    } catch (err) {}
    try {
      bugsnagClient.notify(message);
    } catch (err) {}
    if (isNullOrUndefined(message)) {
      message = 'Server Error';
    }
    return res.status(500).send({
      status: 500,
      message,
    });
  }

  static timeout(res, message = null) {
    if (isNullOrUndefined(message)) {
      message = 'Timeout';
    }
    return res.status(504).json({
      status: 504,
      message,
    });
  }

  static file(res, data, content) {
    return res
      .status(200)
      .set('Content-type', content)
      .send(data);
  }
}

module.exports = { Controller }
