const Sequelize = require('sequelize');

const config = {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
};

const sequelize = new Sequelize('topics', 'ian', '', config);

const Topic = require('./models/topic')(sequelize, Sequelize.DataTypes);

module.exports = {
  sequelize,
  Sequelize,
  Topic,
}
