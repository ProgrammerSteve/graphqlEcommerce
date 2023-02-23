"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const path_1 = __importDefault(require("path"));
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
    app_1.app.get("/*", (req, res) => {
        res.sendFile(path_1.default.join(__dirname, "..", "public", "index.html"));
    });
    app_1.app.listen(PORT, () => {
        console.log("running on port:", PORT);
    });
}
startApolloServer();
