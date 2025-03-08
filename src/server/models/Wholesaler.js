const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../db/config/db.config');
const Retailer = require('./Retailer');

class Wholesaler extends Model {}

Wholesaler.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  mobile_number: { type: DataTypes.STRING, allowNull: false, unique: true },
}, {
  sequelize,
  modelName: 'Wholesaler',
  tableName: 'wholesalers',
  timestamps: false, // Disable timestamps if not required
});

// Many-to-Many Relationship: Wholesalers can have many Retailers
Wholesaler.belongsToMany(Retailer, {
  through: 'WholesalerRetailer',
  foreignKey: 'wholesaler_id',
});

module.exports = Wholesaler;
