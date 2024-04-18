const config = require("../config/config.json");
const { Sequelize } = require("sequelize");

const dbName = "nemsvbrkuj";
const dbUser = "nemsvbrkuj";
const dbPass = "D9qej3EDcn";

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
