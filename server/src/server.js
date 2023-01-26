const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");

const path = require("path");
const cors = require("cors");
const morgan = require("morgan");

const typesArray = loadFilesSync("**/*", {
  extensions: ["graphql"],
});

const resolversArray = loadFilesSync("**/*", {
  extensions: ["resolvers.js"],
});

async function startApolloServer() {
  const app = express();

  app.use(
    cors({
      origin: "http://localhost:3001",
    })
  );
  app.use(morgan("combined"));
  app.use(express.json());

  app.use(express.static(path.join(__dirname, "..", "public")));

  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  });

  const server = new ApolloServer({
    schema: schema,
  });

  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
  });

  app.listen(3001, () => {
    console.log("Running GraphQL server...");
  });
}

startApolloServer();
