const stockRepository = require('../repositories/stock.repository');

// Service for fetching total monthly turnover
const getTotalMonthlyTurnover = async () => {
  return await stockRepository.getTotalMonthlyTurnover();
};

// Service for fetching max turnover from a single retailer
const getMaxTurnoverFromRetailer = async () => {
  return await stockRepository.getMaxTurnoverFromRetailer();
};

// Service to save stock data
const saveStockData = async (retailer_id, wholesaler_id, stock_amount, date) => {
  return await stockRepository.saveStockData(retailer_id, wholesaler_id, stock_amount, date);
};

module.exports = {
  getTotalMonthlyTurnover,
  getMaxTurnoverFromRetailer,
  saveStockData,
};
