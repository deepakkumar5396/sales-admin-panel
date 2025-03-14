'use strict';

const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Wholesalers', 
      Array.from({ length: 10 }).map(() => ({
        name: faker.person.fullName(),
        mobile_number: faker.phone.number(),
        createdAt: new Date(),
        updatedAt: new Date()
      }))
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Wholesalers', null, {});
  }
};
