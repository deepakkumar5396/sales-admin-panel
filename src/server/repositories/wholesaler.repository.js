const db = require("../models"); // Assuming you're using Sequelize or another ORM

class WholesalerRepository {
  // Calculate total monthly turnover (based on stock amounts)
  async calculateMonthlyTurnover() {
    try {
      // Log to make sure the logic here is working fine
      console.log("Calculating monthly turnover...");

      // Assuming 'stock_amount' represents the value of the turnover in your schema
      const turnover = await db.Stock.sum("stock_amount", {
        where: {
          createdAt: {
            [db.Sequelize.Op.gte]: new Date(
              new Date().getFullYear(),
              new Date().getMonth(),
              1
            ),
          },
        },
      });

      console.log("Turnover calculated:", turnover); // Log result
      return turnover;
    } catch (error) {
      console.error("Error calculating monthly turnover:", error.message);
      throw new Error(`Error calculating monthly turnover: ${error.message}`);
    }
  }

  // Get max turnover from a single retailer for each wholesaler
  async getMaxTurnover() {
    try {
      // Assuming 'stock_amount' represents turnover in your schema
      const maxTurnover = await db.Stock.findAll({
        attributes: [
          "wholesalerId",
          [db.Sequelize.fn("MAX", db.Sequelize.col("stock_amount")), "maxTurnover"],
        ],
        group: ["wholesalerId"],
      });
      return maxTurnover;
    } catch (error) {
      throw new Error(`Error fetching max turnover: ${error.message}`);
    }
  }

  // Create a new wholesaler
  async createWholesaler(wholesalerData) {
    try {
      const wholesaler = await db.Wholesaler.create(wholesalerData);
      return wholesaler;
    } catch (error) {
      throw new Error(`Error creating wholesaler: ${error.message}`);
    }
  }

  // Get all wholesalers
  async getAllWholesalers() {
    try {
      const wholesalers = await db.Wholesaler.findAll();
      return wholesalers;
    } catch (error) {
      throw new Error(`Error fetching wholesalers: ${error.message}`);
    }
  }

  // Get wholesaler with associated retailers
  async getWholesalerWithRetailers(wholesalerId) {
    try {
      const wholesaler = await db.Wholesaler.findOne({
        where: { id: wholesalerId },
        include: [
          {
            model: db.Retailer,
            as: "retailers", // Ensure the alias matches what you defined in the model
          },
        ],
      });
      return wholesaler;
    } catch (error) {
      throw new Error(
        `Error fetching wholesaler with retailers: ${error.message}`
      );
    }
  }

  // Update wholesaler by ID
  async updateWholesaler(wholesalerId, wholesalerData) {
    try {
      const [updated] = await db.Wholesaler.update(wholesalerData, {
        where: { id: wholesalerId },
      });
      if (updated) {
        const updatedWholesaler = await db.Wholesaler.findOne({
          where: { id: wholesalerId },
        });
        return updatedWholesaler;
      }
      return null;
    } catch (error) {
      throw new Error(`Error updating wholesaler: ${error.message}`);
    }
  }

  // Delete wholesaler by ID
  async deleteWholesaler(wholesalerId) {
    try {
      const deleted = await db.Wholesaler.destroy({
        where: { id: wholesalerId },
      });
      return deleted;
    } catch (error) {
      throw new Error(`Error deleting wholesaler: ${error.message}`);
    }
  }
}

module.exports = new WholesalerRepository();
