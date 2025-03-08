module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('stocks', [
        {
          id: Sequelize.UUIDV4(),
          retailer_id: 'uuid-for-retailer-one', // Replace with actual retailer UUID
          wholesaler_id: 'uuid-for-wholesaler-one', // Replace with actual wholesaler UUID
          stock_amount: 500.0,
          date: new Date('2021-01-15'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: Sequelize.UUIDV4(),
          retailer_id: 'uuid-for-retailer-two', // Replace with actual retailer UUID
          wholesaler_id: 'uuid-for-wholesaler-two', // Replace with actual wholesaler UUID
          stock_amount: 300.0,
          date: new Date('2021-02-18'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('stocks', null, {});
    },
  };
  