const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const shareupdateModel = sequelize.define(
  "shareupdateModel",
  {
    // Define your model attributes here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    postTitle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "shareandupdates",
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = shareupdateModel;
