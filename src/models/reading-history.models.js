"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ReadingHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ReadingHistory.init(
    {
      user_id: DataTypes.INTEGER,
      novel_id: DataTypes.INTEGER,
      chapter: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ReadingHistory",
    }
  );
  return ReadingHistory;
};
