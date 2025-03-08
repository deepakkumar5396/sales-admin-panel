const retailerRepository = require('../repositories/retailer.repository');

class RetailerService {
    async createRetailer(retailerData) {
        return await retailerRepository.createRetailer(retailerData);
    }

    async getAllRetailers() {
        return await retailerRepository.getAllRetailers();
    }

    async getRetailerById(retailerId) {
        return await retailerRepository.getRetailerById(retailerId);
    }

    async updateRetailer(retailerId, retailerData) {
        return await retailerRepository.updateRetailer(retailerId, retailerData);
    }

    async deleteRetailer(retailerId) {
        return await retailerRepository.deleteRetailer(retailerId);
    }
}

module.exports = new RetailerService();
