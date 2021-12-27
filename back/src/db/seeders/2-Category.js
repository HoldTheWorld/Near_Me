'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //  * Add seed commands here.
    //  *
    //  * Example:
      await queryInterface.bulkInsert('Categories', [
        {
          icon: 'fas fa-border-all fa-2x',
          title: 'Посмотреть все разделы',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          icon: 'fas fa-hand-paper fa-2x',
          title: 'Маникюр',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          icon: 'fas fa-eye fa-2x',
          title: 'Бровисты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          icon: 'fas fa-grin-hearts fa-2x',
          title: 'Макияж',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          icon: 'fas fa-dragon fa-2x',
          title: 'Тату',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          icon: 'fas fa-baby fa-2x',
          title: 'Эпиляция',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          icon: 'fas fa-cut fa-2x',
          title: 'Парикмахер',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          icon: 'fas fa-spa fa-2x',
          title: 'Массаж',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          icon: 'fas fa-paint-roller fa-2x',
          title: 'Косметические услуги',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
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
