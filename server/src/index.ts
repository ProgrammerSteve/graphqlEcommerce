import { ApolloServer } from '@apollo/server';
import path from "path";
import http from 'http';
import { typeDefs } from "./items/items.graphql";
import { resolvers } from "./items/items.resolvers";
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { app } from "./app";

const PORT = process.env.PORT || 8000;
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

async function startServer() {
  await server.start();
  app.use(
    '/graphql',
    expressMiddleware(server),
  );
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
  });

  await new Promise<void>((resolve) => httpServer.listen({ port: PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
}
startServer()