'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : 'Users',
          key : 'id'
        }
      },
      albumId: {
        // need to add references when the Album table is created
        type: Sequelize.INTEGER,
        allowNull : true,
        defaultValue : null
      },
      title: {
        type: Sequelize.STRING(50)
      },
      description: {
        type: Sequelize.STRING(255)
      },
      url: {
        type: Sequelize.STRING(50)
      },
      previewImage: {
        // Need to add references when the image table is created
        type: Sequelize.STRING,
        allowNull : true,
        defaultValue : null
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue : Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue : Sequelize.literal("CURRENT_TIMESTAMP")
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Songs');
  }
};