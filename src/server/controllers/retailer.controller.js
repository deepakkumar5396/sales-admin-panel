const retailerService = require('../services/retailer.service');

class RetailerController {
    async createRetailer(req, res, next) {
        try {
            const retailerData = req.body;
            const retailer = await retailerService.createRetailer(retailerData);
            res.status(201).json(retailer);
        } catch (error) {
            next(error);
        }
    }

    async getAllRetailers(req, res, next) {
        try {
            const retailers = await retailerService.getAllRetailers();
            res.status(200).json(retailers);
        } catch (error) {
            next(error);
        }
    }

    async getRetailerById(req, res, next) {
        try {
            const { retailer_id } = req.params;
            const retailer = await retailerService.getRetailerById(retailer_id);
            res.status(200).json(retailer);
        } catch (error) {
            next(error);
        }
    }

    // API 2: Get retailer by wholesaler_id
    async getRetailerByWholesaler(req, res, next) {
        try {
            const { wholesaler_id } = req.params;
            const retailer = await retailerService.getRetailerByWholesaler(wholesaler_id);
            res.status(200).json(retailer);
        } catch (error) {
            next(error);
        }
    }

    async updateRetailer(req, res, next) {
        try {
            const { retailer_id } = req.params;
            const retailerData = req.body;
            const updatedRetailer = await retailerService.updateRetailer(retailer_id, retailerData);
            res.status(200).json(updatedRetailer);
        } catch (error) {
            next(error);
        }
    }

    async deleteRetailer(req, res, next) {
        try {
            const { retailer_id } = req.params;
            await retailerService.deleteRetailer(retailer_id);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new RetailerController();
