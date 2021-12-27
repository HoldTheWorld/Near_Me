'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cards', [
      {
        title: 'Архитектура бровей',
        text: 'Качественно и недорого',
        image: '11111.png',
        price: '3000',
        instagram: '@brovist',
        whatsapp: '88005553535',
        telegram: '88005553535',
        category_id: 3,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Косметология',
        text: 'Косметологические услуги',
        image: '22222.png',
        price: '5000',
        instagram: '@kosmetology',
        whatsapp: '88005553535',
        telegram: '88005553535',
        category_id: 9,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Массаж',
        text: 'Расслабляющий, спортивный',
        image: '33333.png',
        price: '8000',
        instagram: '@massprofi',
        whatsapp: '88005553535',
        telegram: '88005553535',
        category_id: 8,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Маникюр',
        text: 'Маникюр для вас',
        image: '44444.png',
        price: '2000',
        instagram: '@nails',
        whatsapp: '88005553535',
        telegram: '88005553535',
        category_id: 2,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Make Up',
        text: 'Вечерний, праздничный',
        image: '55555.png',
        price: '4000',
        instagram: '@makeup',
        whatsapp: '88005553535',
        telegram: '88005553535',
        category_id: 4,
        user_id: 1,
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
