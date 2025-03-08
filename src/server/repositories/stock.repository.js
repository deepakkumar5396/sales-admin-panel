const { Stock, Wholesaler } = require('../models');
const sequelize = require('sequelize');

// Repository for fetching total monthly turnover
const getTotalMonthlyTurnover = async () => {
  return await Stock.findAll({
    attributes: [
      [sequelize.fn('date_trunc', 'month', sequelize.col('date')), 'month'],
      [sequelize.fn('sum', sequelize.col('stock_amount')), 'total_turnover'],
      'wholesaler_id',
    ],
    group: ['month', 'wholesaler_id'],
    where: {
      date: {
        [sequelize.Op.between]: ['2021-01-01', '2021-12-31'],
      },
    },
    include: {
      model: Wholesaler,
      attributes: ['id', 'name'],
    },
    raw: true,
  });
};

// Repository for fetching max turnover from a single retailer
const getMaxTurnoverFromRetailer = async () => {
  return await Stock.findAll({
    attributes: [
      [sequelize.fn('max', sequelize.col('stock_amount')), 'max_turnover'],
      'wholesaler_id',
      'retailer_id',
    ],
    group: ['wholesaler_id', 'retailer_id'],
    where: {
      date: {
        [sequelize.Op.between]: ['2021-01-01', '2021-12-31'],
      },
    },
    raw: true,
  });
};

// Repository to save stock data
const saveStockData = async (retailer_id, wholesaler_id, stock_amount, date) => {
  return await Stock.create({
    retailer_id,
    wholesaler_id,
    stock_amount,
    date,
  });
};

module.exports = {
  getTotalMonthlyTurnover,
  getMaxTurnoverFromRetailer,
  saveStockData,
};
