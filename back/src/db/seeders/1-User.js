'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Users', [
    {
      name: 'Admin',
      email: 'admin@admin.ru',
      password: 123,
      phone: 88005553535,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
