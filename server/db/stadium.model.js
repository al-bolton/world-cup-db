'use strict';

module.exports = (sequelize, DataTypes) => {
  const Stadium = sequelize.define('Stadium', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    }
  });
  return Stadium;
}