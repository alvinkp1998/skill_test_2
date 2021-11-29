const express = require("express");
const router = express.Router();
const registerRoutes = require("../controllers/user/register/routes");

router.use("/register", registerRoutes);

module.exports = router;
