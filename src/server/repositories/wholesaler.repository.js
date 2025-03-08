const { Wholesaler, Retailer } = require('../../db/config/db.config');

class WholesalerRepository {
    async createWholesaler(wholesalerData) {
        return await Wholesaler.create(wholesalerData);
    }

    async getWholesalerWithRetailers(wholesalerId) {
        return await Wholesaler.findByPk(wholesalerId, {
            include: [{
                model: Retailer,
                as: 'Retailers'
            }]
        });
    }

    async getMonthlyTurnover() {
        return await Wholesaler.findAll({
            attributes: [
                'id', 'name',
                [sequelize.fn('sum', sequelize.col('Stock.amount')), 'totalTurnover']
            ],
            include: [{
                model: Stock,
                as: 'Stocks'
            }],
            group: ['Wholesaler.id']
        });
    }

    async getMaxTurnover() {
        return await Wholesaler.findAll({
            attributes: [
                'id', 'name',
                [sequelize.fn('max', sequelize.col('Stock.amount')), 'maxTurnover']
            ],
            include: [{
                model: Stock,
                as: 'Stocks'
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
