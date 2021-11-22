'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Platforms', [
      {
        id: 1,
        name: "Netflix",
        monthly_price: 219.99
      },
      {
        id: 2,
        name: "Amazon Prime Video",
        monthly_price: 199.99
      },
      {
        id: 3,
        name: "Disney Plus",
        monthly_price: 150
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    throw new Error('Platform seeder can not be rolled back.')
  }
};
