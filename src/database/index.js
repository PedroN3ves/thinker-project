/* eslint-disable import/no-extraneous-dependencies */
const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');
const User = require('../model/User');
const Thoughts = require('../model/Thoughts');

const connection = new Sequelize(databaseConfig);

User.init(connection);
Thoughts.init(connection);

module.exports = connection;
