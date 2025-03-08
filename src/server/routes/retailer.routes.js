const express = require('express');
const RetailerController = require('../controllers/retailer.controller');

const router = express.Router();

// Create a new retailer
router.post('/', RetailerController.createRetailer);

// Get all retailers
router.get('/', RetailerController.getAllRetailers);

// Get retailer by ID
router.get('/:retailer_id', RetailerController.getRetailerById);

// Update a retailer
router.put('/:retailer_id', RetailerController.updateRetailer);

// Delete a retailer
router.delete('/:retailer_id', RetailerController.deleteRetailer);

module.exports = router;
