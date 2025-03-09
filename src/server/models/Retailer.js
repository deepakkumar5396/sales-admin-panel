const { Model, DataTypes } = require('sequelize');

class Retailer extends Model {
  static associate(models) {
    this.belongsTo(models.Wholesaler, {
      foreignKey: 'wholesaler_id',
    });
  }

  static initModel(sequelize) {
    Retailer.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    }, {
      sequelize, // <-- Pass Sequelize instance here
      modelName: 'Retailer',
      timestamps: true,
    });
  }
}

module.exports = Retailer;
