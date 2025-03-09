const { Model, DataTypes } = require('sequelize');

class Retailer extends Model {
  static associate(models) {
    // Many-to-Many relationship with Wholesalers through Stock table
    this.belongsToMany(models.Wholesaler, {
      through: models.Stock,
      foreignKey: 'retailer_id',
      otherKey: 'wholesaler_id'
    });
  }
}

module.exports = (sequelize) => {
  Retailer.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mobile_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Retailer',
    timestamps: true
  });
  return Retailer;
};
