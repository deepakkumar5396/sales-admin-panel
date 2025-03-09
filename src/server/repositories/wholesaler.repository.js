const db = require('../models');
const { Wholesaler, Retailer, Stock, sequelize } = db;  // Import missing models and sequelize instance

class WholesalerRepository {
    async createWholesaler(wholesalerData) {
        console.log("before creating in db wholesale", wholesalerData);
        return await Wholesaler.create(wholesalerData);
    }

    async getWholesalerWithRetailers(wholesalerId) {
        return await Wholesaler.findByPk(wholesalerId, {
            include: [{
                model: Retailer,
                as: 'Retailers'  // Assuming `Retailer` model is related with 'Retailers' alias in Wholesaler model
            }]
        });
    }

    async getMonthlyTurnover() {
        return await Wholesaler.findAll({
            attributes: [
                'id', 'name',
                [sequelize.fn('sum', sequelize.col('Stocks.amount')), 'totalTurnover']  // Fix column reference
            ],
            include: [{
                model: Stock,
                as: 'Stocks'  // Assuming `Stock` model is related with 'Stocks' alias in Wholesaler model
            }],
            group: ['Wholesaler.id']
        });
    }

    async getMaxTurnover() {
        return await Wholesaler.findAll({
            attributes: [
                'id', 'name',
                [sequelize.fn('max', sequelize.col('Stocks.amount')), 'maxTurnover']  // Fix column reference
            ],
            include: [{
                model: Stock,
                as: 'Stocks'  // Assuming `Stock` model is related with 'Stocks' alias in Wholesaler model
            }],
            group: ['Wholesaler.id']
        });
    }

    async updateWholesaler(wholesalerId, wholesalerData) {
        return await Wholesaler.update(wholesalerData, {
            where: { id: wholesalerId }
        });
    }

    async deleteWholesaler(wholesalerId) {
        return await Wholesaler.destroy({
            where: { id: wholesalerId }
        });
    }
}

module.exports = new WholesalerRepository();
