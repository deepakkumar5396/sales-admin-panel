const { Model, DataTypes } = require('sequelize');

class Wholesaler extends Model {
  // Define associations here
  static associate(models) {
    this.hasMany(models.Retailer, {
      foreignKey: 'wholesaler_id',
    });
  }

  // Initialize the model with Sequelize
  static initModel(sequelize) {
    Wholesaler.init({
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false, // Ensuring the name is required
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false, // Ensuring email is required
        unique: true, // Enforcing uniqueness on email
        validate: {
          isEmail: true, // Ensuring the email is in a valid format
        },
      },
    }, {
      sequelize,
      modelName: 'Wholesaler',
      tableName: 'wholesalers', // Ensuring the table name matches
      timestamps: true, // Enabling Sequelize's built-in createdAt and updatedAt
    });
  }
}

module.exports = Wholesaler;
