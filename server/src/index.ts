import { ApolloServer } from '@apollo/server';
import { makeExecutableSchema, mergeSchemas } from '@graphql-tools/schema';
// import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge" //use fileloader to make it easier to make schema
import path from "path";
import http from 'http';
import { typeDefs as itemTypeDefs } from "./items/items.graphql";
import { typeDefs as cartTypeDefs } from './carts/carts.graphql';
import { items as itemResolvers } from "./items/items.resolvers";
import { carts as cartResolvers } from './carts/carts.resolvers';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { app } from "./app";

const PORT = process.env.PORT || 8000;
const hostname = (process.env.NODE_ENV === 'development') ?"localhost":"0.0.0.0";
const httpServer = http.createServer(app);

const itemSchema = makeExecutableSchema({
  typeDefs: itemTypeDefs,
  resolvers: itemResolvers,
})
const cartSchema = makeExecutableSchema({
  typeDefs: cartTypeDefs,
  resolvers: cartResolvers,
})
const schema = mergeSchemas({ schemas: [itemSchema, cartSchema] })


const server = new ApolloServer({
  schema: schema,
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

  await new Promise<void>((resolve) => httpServer.listen({ port: PORT,hostname}, resolve));
  console.log(`Server ready at:    http://${hostname}:${PORT}/graphql`);
}
startServer()