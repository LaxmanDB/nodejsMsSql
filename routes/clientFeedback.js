const express = require("express");
const router = express.Router();
const feedbackCtrl = require("../controllers/clientFeedbackController");

router.get("/", feedbackCtrl.getAll);

module.exports = router;
