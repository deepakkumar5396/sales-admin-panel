const wholesalerService = require("../services/wholesaler.service");

class WholesalerController {
  async createWholesaler(req, res, next) {
    try {
      const wholesalerData = req.body;
      const wholesaler = await wholesalerService.createWholesaler(
        wholesalerData
      );
      res.status(201).json(wholesaler);
    } catch (error) {
      next(error);
    }
  }

  async getAllWholesalers(req, res, next) {
    try {
      const wholesalers = await wholesalerService.getAllWholesalers();
      res.status(200).json(wholesalers);
    } catch (error) {
      next(error);
    }
  }

  // API 1: Get wholesaler with associated retailers
  async getWholesalerWithRetailers(req, res, next) {
    try {
      const { wholesaler_id } = req.params;
      const wholesaler = await wholesalerService.getWholesalerWithRetailers(
        wholesaler_id
      );
      res.status(200).json(wholesaler);
    } catch (error) {
      next(error);
    }
  }

  // Controller Function to get Monthly Turnover
  async getMonthlyTurnover(req, res, next) {
    try {
      const turnover = await wholesalerService.getMonthlyTurnover();
      res.status(200).json(turnover);
    } catch (error) {
      console.error("Error in calculating monthly turnover:", error.message);
      next(error);
    }
  }

  async getRetailersWithSingleWholesaler(req, res, next) {
    try {
      console.log("Received request to get retailers with a single wholesaler");
      const retailers = await wholesalerService.getRetailersWithSingleWholesaler();
      res.status(200).json(retailers);
    } catch (error) {
      next(error);
    }
  }
  

  // API 4: Get max turnover from a single retailer for each wholesaler
  async getMaxTurnover(req, res, next) {
    try {
      console.log("Received request to get max turnover");
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
      const updatedWholesaler = await wholesalerService.updateWholesaler(
        wholesaler_id,
        wholesalerData
      );
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
