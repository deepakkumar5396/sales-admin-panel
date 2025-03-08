const express = require('express');
const WholesalerController = require('../controllers/wholesaler.controller');

const router = express.Router();

// API 1: Get Wholesaler along with list of Retailers associated
router.get('/:wholesaler_id', WholesalerController.getWholesalerWithRetailers);

// API 3: Total monthly turnover of each wholesaler for a complete year
router.get('/monthly-turnover', WholesalerController.getMonthlyTurnover);

// API 4: Max turnover of each wholesaler from a single retailer
router.get('/max-turnover', WholesalerController.getMaxTurnover);

// Create a new Wholesaler
router.post('/', WholesalerController.createWholesaler);

module.exports = router;
