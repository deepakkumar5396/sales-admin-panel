const express = require('express');
const RetailerController = require('../controllers/retailer.controller');

const router = express.Router();

// API 2: Get a retailer who has single wholesaler
router.get('/single-wholesaler', RetailerController.getRetailerWithSingleWholesaler);

// Create a new Retailer
router.post('/', RetailerController.createRetailer);

module.exports = router;
