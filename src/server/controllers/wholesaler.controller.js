const wholesalerService = require('../services/wholesaler.service');

class WholesalerController {
    async createWholesaler(req, res, next) {
        try {
            console.log(req.body);
            const wholesalerData = req.body;
            const wholesaler = await wholesalerService.createWholesaler(wholesalerData);
            res.status(201).json(wholesaler);
        } catch (error) {
            next(error);
        }
    }

    async getWholesalerWithRetailers(req, res, next) {
        try {
            const { wholesaler_id } = req.params;
            const wholesaler = await wholesalerService.getWholesalerWithRetailers(wholesaler_id);
            res.status(200).json(wholesaler);
        } catch (error) {
            next(error);
        }
    }

    async getMonthlyTurnover(req, res, next) {
        try {
            const turnover = await wholesalerService.getMonthlyTurnover();
            res.status(200).json(turnover);
        } catch (error) {
            next(error);
        }
    }

    async getMaxTurnover(req, res, next) {
        try {
            const maxTurnover = await wholesalerService.getMaxTurnover();
            res.status(200).json(maxTurnover);
        } catch (error) {
            next(error);
        }
    }

    async updateWholesaler(req, res, next) {
        try {
            const { wholesaler_id } = req.params;
            const wholesalerData = req.body;
            const updatedWholesaler = await wholesalerService.updateWholesaler(wholesaler_id, wholesalerData);
            res.status(200).json(updatedWholesaler);
        } catch (error) {
            next(error);
        }
    }

    async deleteWholesaler(req, res, next) {
        try {
            const { wholesaler_id } = req.params;
            await wholesalerService.deleteWholesaler(wholesaler_id);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new WholesalerController();
