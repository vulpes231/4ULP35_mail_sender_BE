const express = require("express");
const router = express.Router();
const sendMailHandler = require("../controllers/send-mail");

router.post("/", sendMailHandler);

module.exports = router;
