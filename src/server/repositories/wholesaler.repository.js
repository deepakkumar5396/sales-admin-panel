const db = require("../models");

class WholesalerRepository {
  async calculateMonthlyTurnover() {
    try {
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

      console.log("Turnover calculated:", turnover);
      return turnover;
    } catch (error) {
      console.error("Error calculating monthly turnover:", error.message);
      throw new Error(`Error calculating monthly turnover: ${error.message}`);
    }
  }

async getRetailersWithSingleWholesaler() {
  try {
    console.log("Fetching retailers with exactly one...");

    const retailers = await db.Retailer.findAll({
      attributes: [
        'id',
        'name',
        'email',
        'wholesalerId',
        [db.Sequelize.fn('COUNT', db.Sequelize.col('wholesalerId')), 'wholesaler_count']
      ],
      include: [
        {
          model: db.Wholesaler,
          as: 'wholesaler',
          attributes: []
        }
      ],
      group: ['Retailer.id'],
      having: db.Sequelize.literal('COUNT(wholesalerId) = 1')
    });

    return retailers;
  } catch (error) {
    console.error('Error fetching retailers with single wholesaler:', error.message);
    throw new Error(`Error fetching retailers with single wholesaler: ${error.message}`);
  }
}

  
  // Get max turnover from a single retailer for each wholesaler
  async getMaxTurnover() {
    try {
      console.log("Fetching max turnover...");
      const maxTurnover = await db.Stock.findAll({
        attributes: [
          "wholesaler_id",
          [
            db.Sequelize.fn("MAX", db.Sequelize.col("stock_amount")),
            "maxTurnover",
          ],
        ],
        group: ["wholesaler_id"],
      });
      return maxTurnover;
    } catch (error) {
      throw new Error(`Error fetching max turnover: ${error.message}`);
    }
  }

  async createWholesaler(wholesalerData) {
    try {
      const wholesaler = await db.Wholesaler.create(wholesalerData);
      return wholesaler;
    } catch (error) {
      throw new Error(`Error creating wholesaler: ${error.message}`);
    }
  }

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
            as: "retailers",
            attributes: ["id", "name", "mobile_number"],
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
