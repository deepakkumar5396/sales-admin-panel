const { Retailer, Wholesaler } = require('../models');

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

// Repository to fetch all retailers
const getAllRetailers = async () => {
  return await Retailer.findAll();
};

module.exports = {
  getRetailerWithSingleWholesaler,
  getAllRetailers,
};
