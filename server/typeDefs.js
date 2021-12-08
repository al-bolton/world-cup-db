const { gql } = require('apollo-server');

module.exports = gql`
  type Team {
    id: Int!
    name: String!
    eliminated: Boolean!
  }

  type Stadium {
    id: Int!
    name: String!
    city: String!
    last_played: Match!
  }

  type Group {
    name: String!
    winner: String
    runnerup: String
    matches: [Match]!
    closing_match: Match!
  }

  type Knockout {
    round_16: Group!
    round_8: Group!
    round_4: Group!
    round_2_loser: Group!
    round_2: Group!
  }

  type Match {
    id: Int!
    home_team: Team!
    away_team: Team!
    home_score: String!
    away_score: String!
    home_penalty: String
    away_penalty: String
    finished: Boolean!
    date: String!
    winner: String
    stadium: Stadium!
  } 

  type Query {
    getTeam (id: Int): Team
    getTeams: [Team]!

    getMatch (id: Int): Match
  }

  type Mutation {
    changeMatchTeams (id: Int, home_team: String, away_team: String): Match
  }
`;