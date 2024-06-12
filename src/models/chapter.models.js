"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chapter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Chapter.init(
    {
      novel_id: DataTypes.INTEGER,
      chapter_number: DataTypes.INTEGER,
      chapter_name: DataTypes.STRING,
      content: DataTypes.TEXT("long"),
      get_from: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Chapter",
    }
  );
  return Chapter;
};
