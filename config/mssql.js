var sql = require("mssql");
const config = require("./config");
// Create a configuration object for our Azure SQL connection parameters
var dbConfig = {
  server: config.SERVER, // Use your SQL server name
  database: config.DATABASE, // Database to connect to
  user: config.USER, // Use your username
  password: config.PASSWORD, // Use your password
  port: 1433,
  options: {
    encrypt: true,
  },
};

function getCustomers() {
  sql.connect(dbConfig, function (err) {
    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();

    // query to the database and get the records
    request.query(
      "select top 2 * from Usermgmt.Users",
      function (err, recordset) {
        if (err) console.log(err);

        // send records as a response
        // res.send(recordset);
        console.log("recordset", recordset);
      }
    );
  });
}

module.exports = { getCustomers };
