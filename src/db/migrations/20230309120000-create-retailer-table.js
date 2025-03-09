module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('retailers', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4, // Correct defaultValue for UUID
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mobile_number: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW, // Ensure default value is set
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW, // Ensure default value is set
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('retailers');
  },
};
