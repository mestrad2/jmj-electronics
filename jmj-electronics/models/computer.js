'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Computer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Computer.init({
    computers_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cost: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING
    },
    brand: {
        type: DataTypes.STRING
    },
    model_num: {
        type: DataTypes.STRING
    },
    spec: {
        type: DataTypes.STRING
    },
    os: {
        type: DataTypes.STRING
    },
    color: {
        type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Computer',
    tableName: 'computer',
    timestamps: false
  });
  return Computer;
};