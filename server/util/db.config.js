const config = require('../config/db.config.json')
module.exports = {
  host: config.host,
  // port: 5432,
  database: config.database,
  user: config.user,
  password: config.password,
  dialect: config.dialect,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
