const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const routes = require("./src/routes");

const { sequelize } = require("./src/models");

// sequelize.sync({ force: true });
// sequelize.sync();

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

module.exports = app;
