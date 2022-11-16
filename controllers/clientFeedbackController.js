// const express = require("express");
// const router = express.Router();
const clientFeedbackService = require("../services/clientFeedbackService");
// router.get("/clients", getAll);

async function getAll(req, res, next) {
  console.log("controlled called");
  await clientFeedbackService
    .getAll()
    .then((users) => res.json(users))
    .catch(next);
}
module.exports = { getAll };
