const retailerRepository = require('../repositories/retailer.repository');

// Service to fetch retailer with a single wholesaler
const getRetailerWithSingleWholesaler = async (retailer_id, wholesaler_id) => {
  return await retailerRepository.getRetailerWithSingleWholesaler(retailer_id, wholesaler_id);
};

// Service to fetch all retailers
const getAllRetailers = async () => {
  return await retailerRepository.getAllRetailers();
};

module.exports = {
  getRetailerWithSingleWholesaler,
  getAllRetailers,
};
