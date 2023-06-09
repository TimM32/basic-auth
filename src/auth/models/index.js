'use strict';

require('dotenv');
const { Sequelize, DataTypes } = require('sequelize');
const userSchema = require('./users-model');
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' :process.env.DATABASE_URL;

const sequelize = new Sequelize(DATABASE_URL);
const users = userSchema(sequelize, DataTypes);


module.exports = { sequelize, users };
