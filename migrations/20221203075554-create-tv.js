'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tvs', {
      tvs_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
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
      screen_size: {
        type: Sequelize.STRING
      },
      resolution: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tvs');
  }
};