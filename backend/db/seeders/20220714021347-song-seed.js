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
        userId: 1,
        title : 'This is a Test song',
        description : 'this is a test description',
        url : 'www.com'
      },
        {
        userId: 1,
        title : 'This is a Test song',
        description : 'this is a test description',
        url : 'www.com'
      },
        {
        userId: 1,
        title : 'This is a Test song',
        description : 'this is a test description',
        url : 'www.com'
      },
        {
        userId: 1,
        title : 'This is a Test song',
        description : 'this is a test description',
        url : 'www.com'
      },
    ], {});
    }
    catch (e) {
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
