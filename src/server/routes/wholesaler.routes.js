const express = require('express');
const WholesalerController = require('../controllers/wholesaler.controller');

const router = express.Router();
router.get('/monthly_turnover/', WholesalerController.getMonthlyTurnover);
router.get('/retailers/single_wholesaler', WholesalerController.getRetailersWithSingleWholesaler);
router.get('/max_turnover/', WholesalerController.getMaxTurnover);
router.get('/:wholesaler_id', WholesalerController.getWholesalerWithRetailers);

router.post('/', WholesalerController.createWholesaler);
router.get('/', WholesalerController.getAllWholesalers);
router.put('/:wholesaler_id', WholesalerController.updateWholesaler);
router.delete('/:wholesaler_id', WholesalerController.deleteWholesaler);

module.exports = router;
