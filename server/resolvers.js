const db = require('./db/index.model')

module.exports = {
  Query: {
    getTeam: async (_, { id }, context, info) => {
      let team = await db.Team.findAll({
        where: {
          id: id
        }
      });
      return team[0].dataValues;
    },
    getTeams: async () => {
      return await db.Team.findAll();
    },
    getMatch: async (_, { id }, context, info) => {
      let match = await db.Match.findAll({
        where: {
          id: id
        }
      });
      return match[0].dataValues;
    }
  },

  Mutation: {
    changeMatchTeams: async (_, { id, home_team, away_team }, context, info) => {
      await db.Match.update({ home_team: home_team, away_team: away_team}, {
        where: {
          id: id
        }
      });
      const updatedMatch = await db.Match.findAll({
        where: {
          id: id
        }
      });
      return updatedMatch[0].dataValues;
    }
  },

  Match: {
    home_team: async (match, args, context) => {
      let team = await db.Team.findAll({
        where: {
          name: match.home_team
        }
      });
      return team[0].dataValues;
    },
    away_team: async (match, args, context) => {
      let team = await db.Team.findAll({
        where: {
          name: match.away_team
        }
      });
      return team[0].dataValues;
    },
    winner: async (match, args, context) => {
      let team = await db.Team.findAll({
        where: {
          name: match.winner
        }
      });
      return team[0].dataValues;
    },
    stadium: async (match, args, context) => {
      let stadium = await db.Stadium.findAll({
        where: {
          id: match.stadium
        }
      });
      return stadium[0].dataValues;
    }
  }
}