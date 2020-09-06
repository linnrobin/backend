"use strict";
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class Property extends Model {}
  Property.init(
    {
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bedroom: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bathroom: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      size: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      certification: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      longitude: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      latitude: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      loan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Property",
    }
  );
  Property.associate = function (models) {
    Property.belongsTo(models.User);
  };
  return Property;
};
