'use strict';

const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    const retailers = await queryInterface.sequelize.query(
      `SELECT id from "Retailers";`
    );
    const wholesalers = await queryInterface.sequelize.query(
      `SELECT id from "Wholesalers";`
    );

    const retailerIds = retailers[0].map(retailer => retailer.id);
    const wholesalerIds = wholesalers[0].map(wholesaler => wholesaler.id);
    if (retailerIds.length === 0 || wholesalerIds.length === 0) {
      console.log("No retailers or wholesalers found. Skipping stock seeder.");
      return;
    }
    const stockData = [];
    for (let i = 0; i < 50; i++) {
      const randomWholesalerId = wholesalerIds[Math.floor(Math.random() * wholesalerIds.length)];
      const randomRetailerId = retailerIds[Math.floor(Math.random() * retailerIds.length)];
      stockData.push({
        wholesaler_id: randomWholesalerId,
        retailer_id: randomRetailerId,
        stock_amount: faker.number.float({ min: 1000, max: 100000 }),
        date: faker.date.recent(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await queryInterface.bulkInsert('Stocks', stockData);
    console.log("✅ Successfully inserted stock data.");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Stocks', null, {});
  }
};
