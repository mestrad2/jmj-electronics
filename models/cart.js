'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cart.init({
    cart_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    desc: {
      type: DataTypes.STRING
    },
    cost_ea: {
      type: DataTypes.INTEGER
    },
    qty: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    total: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Cart',
    tableName: 'cart',
    timestamps: false
  });
  return Cart;
};