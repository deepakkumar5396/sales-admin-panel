const db = require('../models');
const { Wholesaler, Retailer, Stock, sequelize } = db; 

class StockRepository {
    async createStock(stockData) {
        return await Stock.create(stockData);
    }

    async getAllStocks() {
        return await Stock.findAll();
    }

    async getStockById(stockId) {
        return await Stock.findByPk(stockId);
    }

    async updateStock(stockId, stockData) {
        return await Stock.update(stockData, {
            where: { id: stockId }
        });
    }

    async deleteStock(stockId) {
        return await Stock.destroy({
            where: { id: stockId }
        });
    }
}

module.exports = new StockRepository();
