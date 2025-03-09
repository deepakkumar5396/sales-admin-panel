const express = require('express');
const StockController = require('../controllers/stock.controller');

const router = express.Router();
router.post('/', StockController.createStock);
router.get('/', StockController.getAllStock);
router.get('/:stock_id', StockController.getStockById);
router.put('/:stock_id', StockController.updateStock);
router.delete('/:stock_id', StockController.deleteStock);

module.exports = router;
