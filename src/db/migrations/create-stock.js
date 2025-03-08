module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('stocks', {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
        },
        retailer_id: {
          type: Sequelize.UUID,
          references: {
            model: 'retailers',
            key: 'id',
          },
          onDelete: 'CASCADE',
          allowNull: false,
        },
        wholesaler_id: {
          type: Sequelize.UUID,
          references: {
            model: 'wholesalers',
            key: 'id',
          },
          onDelete: 'CASCADE',
          allowNull: false,
        },
        stock_amount: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        date: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('stocks');
    },
  };
  