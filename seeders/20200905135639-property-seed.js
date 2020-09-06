"use strict";

const properties = require("../property.json");
properties.forEach((el) => {
  el.createdAt = new Date();
  el.updatedAt = new Date();
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Properties", properties, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Properties", null, {});
  },
};
