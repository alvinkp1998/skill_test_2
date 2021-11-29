const express = require("express");
const router = express.Router();
const loginUser = require("./login.userController");

router.post("/", loginUser.service);

module.exports = router;
