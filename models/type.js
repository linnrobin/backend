"use strict";
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class Type extends Model {}

  Type.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Type",
    }
  );
  Type.associate = function (models) {
    // associations can be defined here
  };
  return Type;
};
