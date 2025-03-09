const retailerRepository = require('../repositories/retailer.repository');

class RetailerService {
    async getRetailerByWholesaler(wholesalerId) {
        try {
            const retailer = await retailerRepository.findRetailerByWholesaler(wholesalerId);
            
            if (!retailer) {
                throw new Error('Retailer not found for the given wholesaler');
            }
            
            return retailer;
        } catch (error) {
            throw new Error(`Error fetching retailer: ${error.message}`);
        }
    }

    async createRetailer(retailerData) {
        try {
            const retailer = await retailerRepository.createRetailer(retailerData);
            return retailer;
        } catch (error) {
            throw new Error(`Error creating retailer: ${error.message}`);
        }
    }

    async getAllRetailers() {
        try {
            const retailers = await retailerRepository.getAllRetailers();
            return retailers;
        } catch (error) {
            throw new Error(`Error fetching all retailers: ${error.message}`);
        }
    }

    async getRetailerById(retailerId) {
        try {
            const retailer = await retailerRepository.getRetailerById(retailerId);
            if (!retailer) {
                throw new Error('Retailer not found');
            }
            return retailer;
        } catch (error) {
            throw new Error(`Error fetching retailer: ${error.message}`);
        }
    }

    async updateRetailer(retailerId, retailerData) {
        try {
            const updatedRetailer = await retailerRepository.updateRetailer(retailerId, retailerData);
            return updatedRetailer;
        } catch (error) {
            throw new Error(`Error updating retailer: ${error.message}`);
        }
    }

    async deleteRetailer(retailerId) {
        try {
            await retailerRepository.deleteRetailer(retailerId);
            return { message: 'Retailer deleted successfully' };
        } catch (error) {
            throw new Error(`Error deleting retailer: ${error.message}`);
        }
    }
}

module.exports = new RetailerService();
