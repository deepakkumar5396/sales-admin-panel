const wholesalerRepository = require('../repositories/wholesaler.repository');

class WholesalerService {
    // API 3: Get total monthly turnover
    async getMonthlyTurnover() {
        try {
            const turnover = await wholesalerRepository.calculateMonthlyTurnover();
            return turnover;
        } catch (error) {
            throw new Error(`Error fetching monthly turnover: ${error.message}`);
        }
    }

    // API 4: Get max turnover from a single retailer for each wholesaler
    async getMaxTurnover() {
        try {
            const maxTurnover = await wholesalerRepository.getMaxTurnover();
            return maxTurnover;
        } catch (error) {
            throw new Error(`Error fetching max turnover: ${error.message}`);
        }
    }

    // Create a new wholesaler
    async createWholesaler(wholesalerData) {
        try {
            const wholesaler = await wholesalerRepository.createWholesaler(wholesalerData);
            return wholesaler;
        } catch (error) {
            throw new Error(`Error creating wholesaler: ${error.message}`);
        }
    }

    // Get all wholesalers
    async getAllWholesalers() {
        try {
            const wholesalers = await wholesalerRepository.getAllWholesalers();
            return wholesalers;
        } catch (error) {
            throw new Error(`Error fetching wholesalers: ${error.message}`);
        }
    }

    // Get wholesaler with associated retailers
    async getWholesalerWithRetailers(wholesalerId) {
        try {
            const wholesaler = await wholesalerRepository.getWholesalerWithRetailers(wholesalerId);
            if (!wholesaler) {
                throw new Error('Wholesaler not found');
            }
            return wholesaler;
        } catch (error) {
            throw new Error(`Error fetching wholesaler: ${error.message}`);
        }
    }

    // Update wholesaler by ID
    async updateWholesaler(wholesalerId, wholesalerData) {
        try {
            const updatedWholesaler = await wholesalerRepository.updateWholesaler(wholesalerId, wholesalerData);
            return updatedWholesaler;
        } catch (error) {
            throw new Error(`Error updating wholesaler: ${error.message}`);
        }
    }

    // Delete wholesaler by ID
    async deleteWholesaler(wholesalerId) {
        try {
            await wholesalerRepository.deleteWholesaler(wholesalerId);
            return { message: 'Wholesaler deleted successfully' };
        } catch (error) {
            throw new Error(`Error deleting wholesaler: ${error.message}`);
        }
    }
}

module.exports = new WholesalerService();
