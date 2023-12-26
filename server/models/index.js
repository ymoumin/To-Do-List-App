const dbConfig = require("../util/db.config.js");
const {Pool} = require('pg');

const Sequelize = require("sequelize");
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})
const sequelize = new Sequelize(
    process.env.POSTGRES_DATABASE, 
    process.env.POSTGRES_USER, 
    process.env.POSTGRES_PASSWORD, 
    {
        host: process.env.POSTGRES_HOST,
        dialect: 'postgres',
        operatorsAliases: false,

        pool: pool
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tasks = require("./task.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);

module.exports = db;
