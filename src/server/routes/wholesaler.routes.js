const express = require('express');
const WholesalerController = require('../controllers/wholesaler.controller');

const router = express.Router();

// Create a new wholesaler
router.post('/', WholesalerController.createWholesaler);

// Get a wholesaler along with list of retailers
router.get('/:wholesaler_id', WholesalerController.getWholesalerWithRetailers);

// Get total monthly turnover for all wholesalers
router.get('/monthly-turnover', WholesalerController.getMonthlyTurnover);

// Get maximum turnover of each wholesaler from a single retailer
router.get('/max-turnover', WholesalerController.getMaxTurnover);

// Update a wholesaler
router.put('/:wholesaler_id', WholesalerController.updateWholesaler);

// Delete a wholesaler
router.delete('/:wholesaler_id', WholesalerController.deleteWholesaler);

module.exports = router;
