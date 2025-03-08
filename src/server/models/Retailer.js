const { Model, DataTypes } = require('sequelize');
const sequelize = require('./index').sequelize;
const Wholesaler = require('./Wholesaler');

class Retailer extends Model {}

Retailer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'Retailer',
    tableName: 'retailers',
    timestamps: false, // Disable timestamps if not required
  }
);

// Many-to-Many Relationship: Retailers can have many Wholesalers
Retailer.belongsToMany(Wholesaler, {
  through: 'WholesalerRetailer',
  foreignKey: 'retailer_id',
});

module.exports = Retailer;
