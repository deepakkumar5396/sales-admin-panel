module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('retailers', [
        {
          id: Sequelize.UUIDV4(),
          name: 'Retailer One',
          mobile_number: '1122334455',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: Sequelize.UUIDV4(),
          name: 'Retailer Two',
          mobile_number: '2233445566',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('retailers', null, {});
    },
  };
  