const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const userModel = sequelize.define(
  "userModel",
  {
    // Define your model attributes here
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "usermaster",
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = userModel;
