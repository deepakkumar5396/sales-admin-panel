const { Model, DataTypes } = require('sequelize');

class Stock extends Model {
  static associate(models) {
    this.belongsTo(models.Retailer, {
      foreignKey: 'retailer_id',
    });
    this.belongsTo(models.Wholesaler, {
      foreignKey: 'wholesaler_id',
    });
  }

  static initModel(sequelize) {
    Stock.init({
      productName: DataTypes.STRING,
      price: DataTypes.FLOAT,
    }, {
      sequelize,
      modelName: 'Stock',
      
    });
  }
}

module.exports = Stock;
