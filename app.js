const express = require("express");
const app = express();
// const router = express.Router();
const clientFeedbackRouter = require("./routes/clientFeedback"); //express.router;
var cors = require("cors");
// const con = require("./config/dbconfig");
const auth = require("./middleware/auth");
// const { getCustomers } = require("./config/mssql");
// const { executeQuery } = require("./utils/queryExecutor");
app.use(cors());
// app.use("/",(req,res)=>{
// res.send("hello")
// })\
app.use(express.json()); //parse the json data and put it into req.body
const db = require("./models");

//executeQuery("select * from Usermgmt.Users;");
app.use("/clients", clientFeedbackRouter);
//app.use(auth);
// app.get("/", (req, res) => {
//   res.send("Home");
// });

const PORT = 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
