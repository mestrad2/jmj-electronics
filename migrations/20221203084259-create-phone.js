'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Phones', {
      phones_id: {
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
      os: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      screen_size: {
        type: Sequelize.STRING
      },
      memory: {
        type: Sequelize.STRING
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('phones');
  }
};