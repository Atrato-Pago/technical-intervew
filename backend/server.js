const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const methodOverride = require('method-override');
const path = require('path');
const compression = require('compression');
const { createServer } = require('http');
const { routes } = require('./routes');

const app = express();
const server = createServer(app);

// Security middleware
app.use(helmet());

// Util middleware
app.use(methodOverride());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  res.header('Access-Control-Expose-Headers', 'Content-Count');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  return next();
});

routes(app);

const setupServer =  async function () {
  return new Promise((resolve, reject) => {
    try {
      server.listen(5555, () => {
        console.log(`backend started at port ${5555}`)
        resolve(true);
      });
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = {
  setupServer,
  app,
  server
}

