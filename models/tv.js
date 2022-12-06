'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tv extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tv.init({
    tvs_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    description: {
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
    screen_size: {
        type: DataTypes.STRING
    },
    resolution: {
        type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Tv',
    tableName: 'tvs',
    timestamps: false
  });
  return Tv;
};