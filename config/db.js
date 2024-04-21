const config = require("../config/config.json");
const { Sequelize } = require("sequelize");

const dbName = "connectwrk";
const dbUser = "root";
const dbPass = "root";

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: "localhost",
  port: "3306",
  dialect: "mysql",
  operatorsAliases: false,
});

module.exports = sequelize;
