const { Model, DataTypes } = require("sequelize");

class Wholesaler extends Model {
  static associate(models) {
    // Define the many-to-many relationship with Retailer using the 'retailers' alias
    this.belongsToMany(models.Retailer, {
      through: models.Stock,
      foreignKey: "wholesaler_id",
      otherKey: "retailer_id",
      as: "retailers"
    });
  }
}

module.exports = (sequelize) => {
  Wholesaler.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mobile_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "Wholesaler",
      timestamps: true,
    }
  );
  return Wholesaler;
};
