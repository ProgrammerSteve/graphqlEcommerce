"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const items_graphql_1 = require("./items/items.graphql");
const items_resolvers_1 = require("./items/items.resolvers");
const app_1 = require("./app");
const PORT = process.env.PORT || 8000;
async function startApolloServer() {
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs: items_graphql_1.typeDefs,
        resolvers: items_resolvers_1.resolvers
    });
    await server.start();
    server.applyMiddleware({ app: app_1.app, path: "/graphql" });
    app_1.app.listen(PORT, () => {
        console.log("running on port:", PORT);
    });
}
startApolloServer();
