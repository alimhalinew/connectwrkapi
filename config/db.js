const config = require("../config/config.json");
const { Sequelize } = require("sequelize");

const dbName = "nemsvbrkuj";
const dbUser = "nemsvbrkuj";
const dbPass = "D9qej3EDcn";

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: "localhost",
  port: "3306",
  dialect: "mysql",
  operatorsAliases: false,
});

module.exports = sequelize;
