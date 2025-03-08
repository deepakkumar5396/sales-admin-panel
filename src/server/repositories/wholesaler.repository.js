const { Wholesaler, Retailer } = require('../models');

// Repository to fetch wholesaler with associated retailers
const getWholesalerWithRetailers = async (wholesaler_id) => {
  return await Wholesaler.findOne({
    where: { id: wholesaler_id },
    include: {
      model: Retailer,
      through: { attributes: [] }, // Don't include the junction table attributes
      as: 'retailers',
    },
  });
};

// Repository to fetch retailer with a single wholesaler
const getRetailerWithSingleWholesaler = async (retailer_id, wholesaler_id) => {
  return await Retailer.findOne({
    where: { id: retailer_id },
    include: {
      model: Wholesaler,
      through: { attributes: [] }, // Don't include the junction table attributes
      as: 'wholesalers',
      where: {
        id: wholesaler_id,
      },
    },
  });
};

module.exports = {
  getWholesalerWithRetailers,
  getRetailerWithSingleWholesaler,
};
