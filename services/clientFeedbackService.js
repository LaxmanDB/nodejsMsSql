const { sequelize, Sequelize } = require("../models");
const db = require("../models");
// const { executeQuery } = require("../utils/queryExecutor");
// const db = require("../config/sequalize");
module.exports = {
  getAll,
};

// async function getAll() {
//   console.log("Hiiiiiiiiii");
//   var query = await executeQuery("select top 2 * from Usermgmt.Users");
//   console.log("query", query);
//   return query;
// }

async function getAll() {
  try {
    const resp = await db.UserMgmtUsers.findByPk(100);
    console.log("resp", resp);
    return resp;
  } catch (error) {
    console.log("error", error);
  }
}

// db.sequelize
//   .sync()
//   .then(async () => {
// console.log(" table created successfully!");
// return resp;
// })
// .catch((error) => {
//   console.error("Unable to create table : ", error);
// });
