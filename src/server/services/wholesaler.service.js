const wholesalerRepository = require('../repositories/wholesaler.repository');
const stockRepository = require('../repositories/stock.repository');

// Service for fetching wholesaler with associated retailers
const getWholesalerWithRetailers = async (wholesaler_id) => {
  return await wholesalerRepository.getWholesalerWithRetailers(wholesaler_id);
};

// Service for fetching retailer with a single wholesaler
const getRetailerWithSingleWholesaler = async (retailer_id, wholesaler_id) => {
  return await wholesalerRepository.getRetailerWithSingleWholesaler(retailer_id, wholesaler_id);
};

// Service for fetching total monthly turnover of each wholesaler
const getTotalMonthlyTurnover = async () => {
  return await stockRepository.getTotalMonthlyTurnover();
};

// Service for fetching max turnover from a single retailer
const getMaxTurnoverFromRetailer = async () => {
  return await stockRepository.getMaxTurnoverFromRetailer();
};

module.exports = {
  getWholesalerWithRetailers,
  getRetailerWithSingleWholesaler,
  getTotalMonthlyTurnover,
  getMaxTurnoverFromRetailer,
};
