"use strict";

const types = require("../type.json");
types.forEach((el) => {
  el.createdAt = new Date();
  el.updatedAt = new Date();
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Types", types, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Types", null, {});
  },
};
