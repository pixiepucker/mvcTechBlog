const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'BlueBox1',
    password: 'password123',
  },
  {
    username: 'BlueBox2',
    password: 'password123',
  },
  {
    username: 'BlueBox3',
    password: 'password123',
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
