module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('wholesalers', [
      {
        id: Sequelize.UUIDV4(),
        name: 'Wholesaler One',
        mobile_number: '1234567890',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: Sequelize.UUIDV4(),
        name: 'Wholesaler Two',
        mobile_number: '0987654321',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('wholesalers', null, {});
  },
};
