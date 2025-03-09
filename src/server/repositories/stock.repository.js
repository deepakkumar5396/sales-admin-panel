const db = require('../models'); // Assuming you're using an ORM like Sequelize for DB operations.

class StockRepository {
    // Create a new stock entry
    async createStock(stockData) {
        try {
            const stock = await db.Stock.create(stockData);
            return stock;
        } catch (error) {
            throw new Error(`Error creating stock: ${error.message}`);
        }
    }

    // Get all stock entries
    async getAllStock() {
        try {
            const stocks = await db.Stock.findAll();
            return stocks;
        } catch (error) {
            throw new Error(`Error fetching all stock entries: ${error.message}`);
        }
    }

    // Get stock entry by ID
    async getStockById(stockId) {
        try {
            const stock = await db.Stock.findOne({
                where: { id: stockId }
            });
            return stock;
        } catch (error) {
            throw new Error(`Error fetching stock entry: ${error.message}`);
        }
    }

    // Update stock entry by ID
    async updateStock(stockId, stockData) {
        try {
            const [updated] = await db.Stock.update(stockData, {
                where: { id: stockId }
            });
            if (updated) {
                const updatedStock = await db.Stock.findOne({
                    where: { id: stockId }
                });
                return updatedStock;
            }
            return null;
        } catch (error) {
            throw new Error(`Error updating stock entry: ${error.message}`);
        }
    }

    // Delete stock entry by ID
    async deleteStock(stockId) {
        try {
            const deleted = await db.Stock.destroy({
                where: { id: stockId }
            });
            return deleted;
        } catch (error) {
            throw new Error(`Error deleting stock entry: ${error.message}`);
        }
    }
}

module.exports = new StockRepository();
