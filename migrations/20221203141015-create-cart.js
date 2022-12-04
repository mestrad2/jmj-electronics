'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carts', {
      cart_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      desc: {
        type: Sequelize.STRING
      },
      cost_ea: {
        type: Sequelize.INTEGER
      },
      qty: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      total: {
        type: Sequelize.INTEGER
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Carts');
  }
};