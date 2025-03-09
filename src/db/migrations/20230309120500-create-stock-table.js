'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Stocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      wholesaler_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Wholesalers',
          key: 'id'
        },
        onDelete: 'CASCADE',
        allowNull: false
      },
      retailer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Retailers',
          key: 'id'
        },
        onDelete: 'CASCADE',
        allowNull: false
      },
      stock_amount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Stocks');
  }
};
