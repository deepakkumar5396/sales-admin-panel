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

    async getRetailersWithSingleWholesaler() {
        try {
          console.log("Fetching retailers with exactly one wholesaler...");
      
          const retailers = await wholesalerRepository.getRetailersWithSingleWholesaler();
          return retailers;
        } catch (error) {
          throw new Error(`Error fetching retailers with single wholesaler: ${error.message}`);
        }
      }
      

    // API 4: Get max turnover from a single retailer for each wholesaler
    async getMaxTurnover() {
        try {
            console.log("Received request to get max turnover");
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

    // Get retailer associated with a single wholesaler
    async getRetailerWithSingleWholesaler(wholesalerId) {
        try {
            const retailer = await wholesalerRepository.getRetailerWithSingleWholesaler(wholesalerId);
            if (!retailer) {
                throw new Error('Retailer not found');
            }
            return retailer;
        } catch (error) {
            throw new Error(`Error fetching retailer: ${error.message}`);
        }
    }

    // Get total monthly turnover for each wholesaler for a complete year
    async getTotalMonthlyTurnover() {
        try {
            const turnover = await wholesalerRepository.getTotalMonthlyTurnover();
            return turnover;
        } catch (error) {
            throw new Error(`Error fetching total monthly turnover: ${error.message}`);
        }
    }

    // Get max turnover from a single retailer for each wholesaler
    async getMaxTurnoverFromSingleRetailer() {
        try {
            const maxTurnover = await wholesalerRepository.getMaxTurnoverFromSingleRetailer();
            return maxTurnover;
        } catch (error) {
            throw new Error(`Error fetching max turnover: ${error.message}`);
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
