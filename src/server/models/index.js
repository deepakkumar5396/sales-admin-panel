const { Sequelize } = require('sequelize');
const Retailer = require('./Retailer');
const Wholesaler = require('./Wholesaler');
const Stock = require('./Stock');
const dbConfig = require('../../db/config/db.config');

const sequelize = dbConfig.sequelize;

// Initialize models
Retailer.initModel(sequelize);
Wholesaler.initModel(sequelize);
Stock.initModel(sequelize);

// Set up associations
Retailer.associate({ Wholesaler });
Wholesaler.associate({ Retailer });
Stock.associate({ Retailer, Wholesaler });

module.exports = {
  sequelize,
  Retailer,
  Wholesaler,
  Stock,
};
