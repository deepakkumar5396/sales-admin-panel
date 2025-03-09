const { Model, DataTypes } = require('sequelize');

class Wholesaler extends Model {
  static associate(models) {
    // Define associations
    this.hasMany(models.Stock, { foreignKey: 'wholesaler_id' });
  }

  static initModel(sequelize) {
    Wholesaler.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isEmail: true,
          },
        },
      },
      {
        sequelize,
        modelName: 'Wholesaler',
        tableName: 'wholesalers', // Ensure correct table name
      }
    );
  }
}

module.exports = Wholesaler;
