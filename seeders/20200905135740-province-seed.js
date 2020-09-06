"use strict";

const provinces = require("../province.json");
provinces.forEach((el) => {
  el.createdAt = new Date();
  el.updatedAt = new Date();
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Provinces", provinces, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Provinces", null, {});
  },
};
