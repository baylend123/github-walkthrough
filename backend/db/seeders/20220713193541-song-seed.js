'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    try{
      await queryInterface.bulkInsert('Songs', [
        {
          userId : 1,
          title : "Test Song 1",
          description: "Test Song",
          url : "www.com",
        },
        {
          userId : 1,
          title : "Test Song 2",
          description: "Test Song",
          url : "www.com",
        },
        {
          userId : 1,
          title : "Test Song 3",
          description: "Test Song",
          url : "www.com",
        },
        {
          userId : 1,
          title : "Test Song 4",
          description: "Test Song",
          url : "www.com",
        },
      ], {});
    }
    catch(e){
      console.log(e)
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Songs', null, {});
  }
};
