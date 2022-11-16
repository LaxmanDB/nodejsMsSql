const dotdenv = require("dotenv");
dotdenv.config();

module.exports = {
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  SERVER: process.env.SERVER,
  DATABASE: process.env.DATABASE,
};
