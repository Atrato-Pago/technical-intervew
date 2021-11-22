'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Holidays', [
      {
        id: 1,
        date: "2020-11-16",
        is_active: true,
        name: "Revolución Mexicana",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        date: "2020-12-25",
        is_active: true,
        name: "Festejo de Navidad",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        date: "2021-01-01",
        is_active: true,
        name: "Festejo de Año Nuevo",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        date: "2021-02-01",
        is_active: true,
        name: "Día de la Constitución Mexicana",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 5,
        date: "2021-03-15",
        is_active: true,
        name: "Natalicio de Benito Juárez",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 6,
        date: "2021-05-01",
        is_active: true,
        name: "Día del trabajo",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 7,
        date: "2021-09-16",
        is_active: true,
        name: "Independencia de México",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 8,
        date: "2021-11-15",
        is_active: true,
        name: "Revolución Mexicana",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 9,
        date: "2021-12-25",
        is_active: true,
        name: "Festejo de Navidad",
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    throw new Error('Holiday seeder can not be rolled back.')
  }
};
