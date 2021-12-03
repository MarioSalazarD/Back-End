'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('categoriajuegos',[
      {
        id:1,
        nombre: 'football',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:2,
        nombre: 'basketball',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:3,
        nombre: 'volleyball',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
  ], {})
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
