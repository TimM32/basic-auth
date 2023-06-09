'use strict';

require('dotenv');
const { Sequelize, DataTypes } = require('sequelize');
const userSchema = require('./users-model');
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' :process.env.DATABASE_URL;

const sequelize = new Sequelize(process.env.DATABASE_URL);

const Users = userSchema(sequelize, DataTypes);

module.exports = { sequelize, Users };
