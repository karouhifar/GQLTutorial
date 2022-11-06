import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  schema {
    query: Query
  }
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => "Hello Kamyab",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const listenUrl = await server.listen({ port: 9000 });

console.log("🚀🚀 ~~~ Server running at " + listenUrl.port);
