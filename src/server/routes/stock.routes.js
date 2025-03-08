const express = require('express');
const StockController = require('../controllers/stock.controller');

const router = express.Router();

// Create stock entry (wholesaler selling to retailer)
router.post('/', StockController.createStock);

// Get all stock (optional)
router.get('/', StockController.getAllStocks);

module.exports = router;
