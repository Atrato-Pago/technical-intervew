module.exports = {
  database: process.env.DB_NAME || 'atrato',
  username: process.env.DB_USER || 'atrater',
  password: process.env.DB_PASSWORD || 'Atr4t02021',
  host: process.env.DB_HOST || 'localhost',
  dialect: process.env.DB_DIALECT || 'mysql',
  storage: process.env.DB_DIALECT === 'sqlite' ? './db.sqlite' : null,
  logging: false,
  dialectOptions: {
    useUTC: false,
    ssl:
      process.env.NODE_ENV === 'production'
  },
  timezone: 'America/Merida'
}
