"use strict";
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class User extends Model {}

  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.associate = function (models) {
    User.hasMany(models.Property);
  };
  return User;
};
