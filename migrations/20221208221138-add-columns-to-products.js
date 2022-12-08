'use strict';
const { DataTypes } = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await [
      queryInterface.addColumn('products', 'in_stock', {
        type: DataTypes.INTEGER
      }),
      queryInterface.addColumn('products', 'fast_deliver', {
        type: DataTypes.BOOLEAN,
        defautValue: true
      }),
      queryInterface.addColumn('products', 'product_type', {
        type: DataTypes.STRING
      })
    ] 
      
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
