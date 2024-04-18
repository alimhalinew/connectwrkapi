const config = require("../config/config.json");
const { Sequelize } = require("sequelize");

const dbName = "connectwrk";
const dbUser = "root";
const dbPass = "root";

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
