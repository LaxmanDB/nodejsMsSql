const { connection } = require("../config/dbconfig");
var Request = require("tedious").Request;
var executeQuery = async (query) =>
  new Promise((resolve, reject) => {
    connection.connect();
    connection.on("connect", async function (err) {
      // If no error, then good to proceed.
      const request = new Request(query, (err, rowCount, rows) => {
        const result = rows.map((r) => {
          return r.reduce((a, k) => {
            a[k.metadata.colName] = k.value;
            return a;
          }, {});
        });
        resolve(result);
        if (err) {
          reject();
        }
      });

      connection.execSql(request);
    });
    connection.close();
  });
module.exports = { executeQuery };
