var Connection = require("tedious").Connection;

const env = require("./config");
const { SERVER, PASSWORD, DATABASE, USER } = env;
var config = {
  server: SERVER, //update me
  authentication: {
    type: "default",
    options: {
      userName: USER, //update me
      password: PASSWORD, //update me
    },
  },
  options: {
    database: DATABASE, //update me
    // If you are on Microsoft Azure, you need encryption:
    encrypt: true,
    // rowCollectionOnDone: true,
    // rowCollectionOnRequestCompletion: true,
  },
};

var connection = new Connection(config);

module.exports = { connection };
