const stockRepository = require('../repositories/stock.repository');

class StockService {
    // Create a new stock entry
    async createStock(stockData) {
        try {
            const stock = await stockRepository.createStock(stockData);
            return stock;
        } catch (error) {
            throw new Error(`Error creating stock: ${error.message}`);
        }
    }

    // Get all stock entries
    async getAllStock() {
        try {
            const stocks = await stockRepository.getAllStock();
            return stocks;
        } catch (error) {
            throw new Error(`Error fetching all stock entries: ${error.message}`);
        }
    }

    // Get stock entry by ID
    async getStockById(stockId) {
        try {
            const stock = await stockRepository.getStockById(stockId);
            if (!stock) {
                throw new Error('Stock entry not found');
            }
            return stock;
        } catch (error) {
            throw new Error(`Error fetching stock: ${error.message}`);
        }
    }

    // Update stock entry by ID
    async updateStock(stockId, stockData) {
        try {
            const updatedStock = await stockRepository.updateStock(stockId, stockData);
            return updatedStock;
        } catch (error) {
            throw new Error(`Error updating stock: ${error.message}`);
        }
    }

    // Delete stock entry by ID
    async deleteStock(stockId) {
        try {
            await stockRepository.deleteStock(stockId);
            return { message: 'Stock deleted successfully' };
        } catch (error) {
            throw new Error(`Error deleting stock: ${error.message}`);
        }
    }
}

module.exports = new StockService();
