const express = require("express");
const router = express.Router();
const registerRoutes = require("../controllers/user/register/routes");
const loginRoutes = require("../controllers/user/login/routes");
const userRoutes = require("../controllers/user/routes");

router.use("/register", registerRoutes);
router.use("/login", loginRoutes);
router.use("/users", userRoutes);

module.exports = router;
