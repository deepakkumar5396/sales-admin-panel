const express = require('express');
const RetailerController = require('../controllers/retailer.controller');

const router = express.Router();

// API: Get retailer by wholesaler ID
router.get('/by-wholesaler/:wholesaler_id', RetailerController.getRetailerByWholesaler);

// Existing routes for retailers
router.post('/', RetailerController.createRetailer);
router.get('/', RetailerController.getAllRetailers);
router.get('/:retailer_id', RetailerController.getRetailerById);
router.put('/:retailer_id', RetailerController.updateRetailer);
router.delete('/:retailer_id', RetailerController.deleteRetailer);

module.exports = router;
