"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Novel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Novel.init(
    {
      name: DataTypes.STRING,
      author: DataTypes.STRING,
      url_pic: DataTypes.STRING,
      summary: DataTypes.TEXT,
      view: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Novel",
    }
  );
  return Novel;
};
