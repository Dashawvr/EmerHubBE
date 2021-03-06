const { Sequelize } = require('sequelize');

const {
  DATABASE_PASSWORD,
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_DIALECT,
  DATABASE_HOST
} = require('./global.config');

module.exports = new Sequelize(
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  {
    dialect: DATABASE_DIALECT,
    host: DATABASE_HOST
  }
);
