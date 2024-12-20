'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("UserConnections", "blocked_by", {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
      unique: true,
      comment: "The id that bloked the chat",
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("UserConnections", "blocked_by")
  }
};
