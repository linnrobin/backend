"use strict";
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class Status extends Model {}

  Status.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Status",
    }
  );
  Status.associate = function (models) {
    // associations can be defined here
  };
  return Status;
};
