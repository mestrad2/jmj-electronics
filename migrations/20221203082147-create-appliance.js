'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appliances', {
      appliances_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      desc: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cost: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      model_num: {
        type: Sequelize.STRING
      },
      spec: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      utility: {
        type: Sequelize.STRING
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('appliances');
  }
};