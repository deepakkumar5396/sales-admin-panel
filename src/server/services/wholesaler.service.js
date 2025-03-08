const wholesalerRepository = require('../repositories/wholesaler.repository');

class WholesalerService {
    async createWholesaler(wholesalerData) {
        return await wholesalerRepository.createWholesaler(wholesalerData);
    }

    async getWholesalerWithRetailers(wholesalerId) {
        return await wholesalerRepository.getWholesalerWithRetailers(wholesalerId);
    }

    async getMonthlyTurnover() {
        return await wholesalerRepository.getMonthlyTurnover();
    }

    async getMaxTurnover() {
        return await wholesalerRepository.getMaxTurnover();
    }

    async updateWholesaler(wholesalerId, wholesalerData) {
        return await wholesalerRepository.updateWholesaler(wholesalerId, wholesalerData);
    }

    async deleteWholesaler(wholesalerId) {
        return await wholesalerRepository.deleteWholesaler(wholesalerId);
    }
}

module.exports = new WholesalerService();
