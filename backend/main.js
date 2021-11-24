const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '/../.env') });
const { setupDB } = require('./sequelize');
const { setupServer } = require('./server');


process.env.TZ = 'UTC'; // IMPORTANT For correct timezone management with DB, Tasks etc.

(async () => {
  try {
    await setupDB();
    await setupServer();
  } catch (error) {
    console.log(error)
  }
})();
