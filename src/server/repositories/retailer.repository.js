const db = require('../models');
class RetailerRepository {
    async findRetailerByWholesaler(wholesalerId) {
        try {
            const retailer = await db.Retailer.findOne({
                where: {
                    wholesalerId: wholesalerId,
                }
            });
            
            if (!retailer) {
                return null;
            }

            return retailer;
        } catch (error) {
            throw new Error(`Error fetching retailer: ${error.message}`);
        }
    }

    // Create a new retailer
    async createRetailer(retailerData) {
        try {
            const retailer = await db.Retailer.create(retailerData);
            return retailer;
        } catch (error) {
            throw new Error(`Error creating retailer: ${error.message}`);
        }
    }

    // Get all retailers
    async getAllRetailers() {
        try {
            const retailers = await db.Retailer.findAll();
            return retailers;
        } catch (error) {
            throw new Error(`Error fetching retailers: ${error.message}`);
        }
    }

    // Get retailer by ID
    async getRetailerById(retailerId) {
        try {
            const retailer = await db.Retailer.findOne({
                where: { id: retailerId }
            });
            return retailer;
        } catch (error) {
            throw new Error(`Error fetching retailer by ID: ${error.message}`);
        }
    }

    // Update retailer by ID
    async updateRetailer(retailerId, retailerData) {
        try {
            const [updated] = await db.Retailer.update(retailerData, {
                where: { id: retailerId }
            });
            if (updated) {
                const updatedRetailer = await db.Retailer.findOne({
                    where: { id: retailerId }
                });
                return updatedRetailer;
            }
            return null;
        } catch (error) {
            throw new Error(`Error updating retailer: ${error.message}`);
        }
    }

    // Delete retailer by ID
    async deleteRetailer(retailerId) {
        try {
            const deleted = await db.Retailer.destroy({
                where: { id: retailerId }
            });
            return deleted;
        } catch (error) {
            throw new Error(`Error deleting retailer: ${error.message}`);
        }
    }
}

module.exports = new RetailerRepository();
