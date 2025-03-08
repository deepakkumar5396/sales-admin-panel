const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {

  dialect: 'postgres',
});

const Retailer = require('./Retailer');
const Wholesaler = require('./Wholesaler');
const Stock = require('./Stock');

Retailer.belongsToMany(Wholesaler, {
  through: 'WholesalerRetailer',
  foreignKey: 'retailer_id',
});

Wholesaler.belongsToMany(Retailer, {
  through: 'WholesalerRetailer',
  foreignKey: 'wholesaler_id',
});



module.exports = {
  sequelize,
  Retailer,
  Wholesaler,
  Stock,
};
