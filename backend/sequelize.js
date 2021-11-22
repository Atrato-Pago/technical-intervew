const { Sequelize } = require('sequelize');
const path = require('path');
const config = require('./config/database');

const dbOptions = {
  modelPaths: [path.join(__dirname, '/models')],
  define: {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    underscored: true,
  },
  dialectOptions: {
    useUTC: false,
    ssl: null,
  },
  timezone: 'America/Merida',
};

let db;
if (!isNullOrUndefined(process.env.DATABASE_URL)) {
  dbOptions.dialectOptions['ssl'] = {
    require: true,
    rejectUnauthorized: false,
  };
  db = new Sequelize(process.env.DATABASE_URL, { ...dbOptions });
} else {
  db = new Sequelize({ ...config, ...dbOptions });
}

const setupDB = () => {
  return db.authenticate();
}

module.exports = {
  db, setupDB
}

// Should be called in server

