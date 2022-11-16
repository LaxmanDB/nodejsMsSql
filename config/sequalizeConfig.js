const dotdenv = require("dotenv");
dotdenv.config();
module.exports = {
  dbName: process.env.DATABASE,
  port: 1433,
  dbConfig: {
    server: process.env.SERVER,
    options: {
      trustServerCertificate: true,
    },
    authentication: {
      type: "default",
      options: {
        userName: process.env.USER,
        password: process.env.PASSWORD,
      },
    },
  },
};
