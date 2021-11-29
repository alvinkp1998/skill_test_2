const express = require("express");
const router = express.Router();
const validator = require("../../../helpers/validator");
const registerUser = require("./register.userController");

router.post("/", registerUser.validation, validator, registerUser.service);

module.exports = router;
