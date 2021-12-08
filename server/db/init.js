const fs = require('fs');
const path = require('path');

const db = require('./index.model')

const footballData = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../data/world-cup.json')));

// const matches = [];
// for (let groupName of Object.keys(footballData.groups)) { matches.push(...footballData.groups[groupName]['matches']) }
// for (let knockoutRound of Object.keys(footballData.knockout)) { matches.push(...footballData.knockout[knockoutRound]['matches']) }

// for (let match of matches) {
//   db.Match.create({
//     id: match.id,
//     home_team: match.home_team,
//     away_team: match.away_team,
//     home_score: match.home_score,
//     away_score: match.away_score,
//     home_penalty: match.home_penalty,
//     away_penalty: match.away_penalty,
//     finished: match.finished,
//     date: match.date,
//     winner: match.winner,
//     loser: match.loser,
//     stadium: match.stadium_id
//   })
// }

// for (let stadium of footballData.stadiums) {
//   db.Stadium.create({id: stadium.id, name: stadium.name, city: stadium.city});
// }

// for (let team of footballData.teams) {
//   db.Team.create({ id: team.id, name: team.name, eliminated: team.eliminated });
// }