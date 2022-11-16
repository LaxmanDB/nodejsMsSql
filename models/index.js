const dbConfig = require("./sequalizeConfig");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
  logging: true,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully."); // eslint-disable-line no-console
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err); // eslint-disable-line no-console
  });
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.UserMgmtUsers = require("./clientModel.js")(sequelize, Sequelize);
module.exports = db;
