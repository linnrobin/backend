"use strict";
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class Province extends Model {}

  Province.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Province",
    }
  );
  Province.associate = function (models) {
    // associations can be defined here
  };
  return Province;
};
