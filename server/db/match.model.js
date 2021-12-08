'use strict';

module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    home_team: {
      type: DataTypes.STRING,
      allowNull: false
    },
    away_team: {
      type: DataTypes.STRING,
      allowNull: false
    },
    home_score: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    away_score: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    home_penalty: {
      type: DataTypes.INTEGER
    },
    away_penalty: {
      type: DataTypes.INTEGER
    },
    finished: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    winner: {
      type: DataTypes.STRING
    },
    loser: {
      type: DataTypes.STRING
    },
    stadium: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Match;
}