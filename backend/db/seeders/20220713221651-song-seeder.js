'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    try {
      await queryInterface.bulkInsert('Songs', [
        {
          userId: 1,
          title: 'Test Song2',
          description: 'this is a test song',
          url: 'www.com',
        },
        {
          userId: 1,
          title: 'Test Song3',
          description: 'this is a test song',
          url: 'www.com',
        },
        {
          userId: 1,
          title: 'Test Song4',
          description: 'this is a test song',
          url: 'www.com',
        },
        {
          userId: 1,
          title: 'Test Song5',
          description: 'this is a test song',
          url: 'www.com',
        },
      ], {});
    }
    catch(e) {
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
