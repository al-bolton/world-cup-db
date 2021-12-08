const { ApolloServer } = require('apollo-server');

const db = require('./db/index.model.js');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

// Below line of code will initialise the db from the json - not always needed
// const dbInit = require('./db/init')

const server = new ApolloServer({ typeDefs, resolvers });

(async function bootstrap() {
  await db.sequelize.authenticate();
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
})();

