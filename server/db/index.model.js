'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const config = {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432
};

const sequelize = new Sequelize('graphql_trial', 'postgres', 'postgres', config);

const db = {};

const files = fs.readdirSync(__dirname);

for (const file of files) {
  if (file !== 'index.model.js' && file !== 'init.js') {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  }
}

console.log('📢  db  📢\n', db);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;