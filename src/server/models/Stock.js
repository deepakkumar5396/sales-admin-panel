const { Model, DataTypes } = require("sequelize");

class Stock extends Model {
  static associate(models) {
    // Stock belongs to Wholesaler
    this.belongsTo(models.Wholesaler, {
      foreignKey: "wholesaler_id",
    });

    // Stock belongs to Retailer
    this.belongsTo(models.Retailer, {
      foreignKey: "retailer_id",
    });
  }
}

module.exports = (sequelize) => {
  Stock.init(
    {
      wholesaler_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      retailer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stock_amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Stock",
      timestamps: true,
    }
  );
  return Stock;
};
