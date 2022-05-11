const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'u r wrong',
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: 'wow ur special',
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: 'that is interesting',
    user_id: 3,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
