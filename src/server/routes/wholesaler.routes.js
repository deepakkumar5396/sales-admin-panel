const express = require('express');
const WholesalerController = require('../controllers/wholesaler.controller');

const router = express.Router();

// API 1: Get wholesaler with associated retailers
router.get('/:wholesaler_id', WholesalerController.getWholesalerWithRetailers);

// API 2: Get total monthly turnover for all wholesalers
router.get('/monthly-turnover', WholesalerController.getMonthlyTurnover);

// API 3: Get max turnover from a single retailer for each wholesaler
router.get('/max-turnover', WholesalerController.getMaxTurnover);

// Existing routes for wholesalers
router.post('/', WholesalerController.createWholesaler);
router.get('/', WholesalerController.getAllWholesalers);
router.put('/:wholesaler_id', WholesalerController.updateWholesaler);
router.delete('/:wholesaler_id', WholesalerController.deleteWholesaler);

module.exports = router;
