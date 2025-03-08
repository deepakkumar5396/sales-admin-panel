const express = require('express');
const StockController = require('../controllers/stock.controller');

const router = express.Router();

// Create a new stock entry
router.post('/', StockController.createStock);

// Get all stock entries
router.get('/', StockController.getAllStock);

// Get stock entry by ID
router.get('/:stock_id', StockController.getStockById);

// Update a stock entry
router.put('/:stock_id', StockController.updateStock);

// Delete a stock entry
router.delete('/:stock_id', StockController.deleteStock);

module.exports = router;
