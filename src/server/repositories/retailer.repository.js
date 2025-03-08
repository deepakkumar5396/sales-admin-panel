const { Retailer } = require('../../db/config/db.config');

class RetailerRepository {
    async createRetailer(retailerData) {
        return await Retailer.create(retailerData);
    }

    async getAllRetailers() {
        return await Retailer.findAll();
    }

    async getRetailerById(retailerId) {
        return await Retailer.findByPk(retailerId);
    }

    async updateRetailer(retailerId, retailerData) {
        return await Retailer.update(retailerData, {
            where: { id: retailerId }
        });
    }

    async deleteRetailer(retailerId) {
        return await Retailer.destroy({
            where: { id: retailerId }
        });
    }
}

module.exports = new RetailerRepository();
