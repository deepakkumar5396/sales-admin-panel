const { Model, DataTypes } = require('sequelize');
const sequelize = require('./index').sequelize;
const Retailer = require('./Retailer');
const Wholesaler = require('./Wholesaler');

class Stock extends Model {}

Stock.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    retailer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Retailer,
        key: 'id',
      },
      allowNull: false,
    },
    wholesaler_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Wholesaler,
        key: 'id',
      },
      allowNull: false,
    },
    stock_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Stock',
    tableName: 'stocks',
    timestamps: false, // Disable timestamps if not required
  }
);

// Establish relationships
Stock.belongsTo(Retailer, { foreignKey: 'retailer_id' });
Stock.belongsTo(Wholesaler, { foreignKey: 'wholesaler_id' });

module.exports = Stock;
