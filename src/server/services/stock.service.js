const stockRepository = require('../repositories/stock.repository');

class StockService {
    async createStock(stockData) {
        return await stockRepository.createStock(stockData);
    }

    async getAllStocks() {
        return await stockRepository.getAllStocks();
    }

    async getStockById(stockId) {
        return await stockRepository.getStockById(stockId);
    }

    async updateStock(stockId, stockData) {
        return await stockRepository.updateStock(stockId, stockData);
    }

    async deleteStock(stockId) {
        return await stockRepository.deleteStock(stockId);
    }
}

module.exports = new StockService();
