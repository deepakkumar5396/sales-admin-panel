const stockService = require('../services/stock.service');

class StockController {
    async createStock(req, res, next) {
        try {
            const stockData = req.body;
            const stock = await stockService.createStock(stockData);
            res.status(201).json(stock);
        } catch (error) {
            next(error);
        }
    }

    async getAllStock(req, res, next) {
        try {
            const stocks = await stockService.getAllStock();
            res.status(200).json(stocks);
        } catch (error) {
            next(error);
        }
    }

    async getStockById(req, res, next) {
        try {
            const { stock_id } = req.params;
            const stock = await stockService.getStockById(stock_id);
            res.status(200).json(stock);
        } catch (error) {
            next(error);
        }
    }

    async updateStock(req, res, next) {
        try {
            const { stock_id } = req.params;
            const stockData = req.body;
            const updatedStock = await stockService.updateStock(stock_id, stockData);
            res.status(200).json(updatedStock);
        } catch (error) {
            next(error);
        }
    }

    async deleteStock(req, res, next) {
        try {
            const { stock_id } = req.params;
            await stockService.deleteStock(stock_id);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new StockController();
