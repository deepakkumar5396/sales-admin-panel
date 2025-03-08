const wholesalerService = require('../services/wholesaler.service');

// Controller for fetching wholesaler with associated retailers
const getWholesalerWithRetailers = async (req, res) => {
  try {
    const wholesaler = await wholesalerService.getWholesalerWithRetailers(req.params.wholesaler_id);
    if (!wholesaler) {
      return res.status(404).json({ message: 'Wholesaler not found' });
    }
    return res.json(wholesaler);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Controller for fetching retailer with a single wholesaler
const getRetailerWithSingleWholesaler = async (req, res) => {
  try {
    const retailer = await wholesalerService.getRetailerWithSingleWholesaler(req.params.retailer_id, req.params.wholesaler_id);
    if (!retailer) {
      return res.status(404).json({ message: 'Retailer not found for the given wholesaler' });
    }
    return res.json(retailer);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Controller for total monthly turnover of each wholesaler for the year
const getTotalMonthlyTurnover = async (req, res) => {
  try {
    const turnoverData = await wholesalerService.getTotalMonthlyTurnover();
    return res.json(turnoverData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Controller for max turnover from a single retailer
const getMaxTurnoverFromRetailer = async (req, res) => {
  try {
    const maxTurnoverData = await wholesalerService.getMaxTurnoverFromRetailer();
    return res.json(maxTurnoverData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getWholesalerWithRetailers,
  getRetailerWithSingleWholesaler,
  getTotalMonthlyTurnover,
  getMaxTurnoverFromRetailer,
};
