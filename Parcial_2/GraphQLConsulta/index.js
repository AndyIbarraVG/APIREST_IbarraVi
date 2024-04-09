const { ApolloServer, gql } = require('apollo-server');

// Define el esquema GraphQL
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define las resolvers para las consultas
const resolvers = {
  Query: {
    hello: () => '¡Hola Mundo desde Apollo Server!',
  },
};

// Crea una instancia del servidor Apollo
const server = new ApolloServer({ typeDefs, resolvers });

// Inicia el servidor
server.listen().then(({ url }) => {
  console.log(`Servidor Apollo listo en ${url}`);
});