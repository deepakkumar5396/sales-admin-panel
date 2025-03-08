const stockService = require('../services/stock.service');

// Controller for total monthly turnover of each wholesaler for the year
const getTotalMonthlyTurnover = async (req, res) => {
  try {
    const turnoverData = await stockService.getTotalMonthlyTurnover();
    return res.json(turnoverData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Controller for fetching max turnover from a single retailer
const getMaxTurnoverFromRetailer = async (req, res) => {
  try {
    const maxTurnoverData = await stockService.getMaxTurnoverFromRetailer();
    return res.json(maxTurnoverData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Controller to save stock data
const saveStockData = async (req, res) => {
  try {
    const { retailer_id, wholesaler_id, stock_amount, date } = req.body;
    const stock = await stockService.saveStockData(retailer_id, wholesaler_id, stock_amount, date);
    return res.status(201).json(stock);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getTotalMonthlyTurnover,
  getMaxTurnoverFromRetailer,
  saveStockData,
};
