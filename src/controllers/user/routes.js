const express = require("express");
const router = express.Router();
const getUser = require("./get.userController");
const userJWT = require("../../middlewares/jwt");

router.get("/", userJWT.checkJWT, getUser.service);

module.exports = router;
