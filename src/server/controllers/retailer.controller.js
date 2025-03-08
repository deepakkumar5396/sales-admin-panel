const retailerService = require('../services/retailer.service');

// Controller for fetching retailer with a single wholesaler
const getRetailerWithSingleWholesaler = async (req, res) => {
  try {
    const retailer = await retailerService.getRetailerWithSingleWholesaler(req.params.retailer_id, req.params.wholesaler_id);
    if (!retailer) {
      return res.status(404).json({ message: 'Retailer not found for the given wholesaler' });
    }
    return res.json(retailer);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Controller for fetching all retailers
const getAllRetailers = async (req, res) => {
  try {
    const retailers = await retailerService.getAllRetailers();
    return res.json(retailers);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getRetailerWithSingleWholesaler,
  getAllRetailers,
};
