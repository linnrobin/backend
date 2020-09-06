"use strict";

const statuses = require("../status.json");
statuses.forEach((el) => {
  el.createdAt = new Date();
  el.updatedAt = new Date();
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Statuses", statuses, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Statuses", null, {});
  },
};
