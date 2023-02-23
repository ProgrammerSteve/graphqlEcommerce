import { ApolloServer } from "apollo-server-express";
import path from "path";
import { typeDefs } from "./items/items.graphql";
import { resolvers } from "./items/items.resolvers";
import { app } from "./app";


const PORT = process.env.PORT || 8000;
async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
  });
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
  });
  app.listen(PORT, () => {
    console.log("running on port:", PORT);
  });
}
startApolloServer();
