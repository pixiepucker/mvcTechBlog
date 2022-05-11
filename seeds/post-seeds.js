const { Post } = require('../models');

const postdata = [
  {
    title: 'This site is poop',
    body: 'bing bong',
    user_id: 1,
  },
  {
    title: 'Wow i love this site',
    body: 'bong bing',
    user_id: 2,
  },
  {
    title: 'I am neutral towards this site.',
    body: 'hehe',
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
