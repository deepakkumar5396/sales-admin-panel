'use strict';

const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Retailers', 
      Array.from({ length: 20 }).map(() => ({
        name: faker.person.fullName(),
        mobile_number: faker.phone.number(),
        createdAt: new Date(),
        updatedAt: new Date()
      }))
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Retailers', null, {});
  }
};
