const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '/../../.env') });

console.log(path.join(__dirname, '/../../'))
var env = process.env.NODE_ENV || 'development';

var db;

if (
  process.env.DATABASE_URL !== null &&
  process.env.DATABASE_URL !== undefined
) {
  db = {
    url: process.env.DATABASE_URL,
    ssl: true,
    timezone: 'America/Merida',
    dialectOptions: {
      useUTC: false,
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  };
} else {
  db = {
    database: process.env.DB_NAME || 'atrato',
    username: process.env.DB_USER || 'atrater',
    password: process.env.DB_PASSWORD || 'Atr4t02021',
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'mysql',
    storage: process.env.DB_DIALECT === 'sqlite' ? './db.sqlite' : null,
    timezone: 'America/Merida',
    dialectOptions: {
      useUTC: false,
      ssl: env === 'production',
    },
  };
}

console.log(process.env.DB_NAME)

module.exports = {
  [env]: db,
};
