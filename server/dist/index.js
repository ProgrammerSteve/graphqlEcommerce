"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const path_1 = __importDefault(require("path"));
const http_1 = __importDefault(require("http"));
const items_graphql_1 = require("./items/items.graphql");
const items_resolvers_1 = require("./items/items.resolvers");
const express4_1 = require("@apollo/server/express4");
const drainHttpServer_1 = require("@apollo/server/plugin/drainHttpServer");
const app_1 = require("./app");
const PORT = process.env.PORT || 8000;
const httpServer = http_1.default.createServer(app_1.app);
const server = new server_1.ApolloServer({
    typeDefs: items_graphql_1.typeDefs,
    resolvers: items_resolvers_1.resolvers,
    plugins: [(0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
});
async function startServer() {
    await server.start();
    app_1.app.use('/graphql', (0, express4_1.expressMiddleware)(server));
    app_1.app.get("/*", (req, res) => {
        res.sendFile(path_1.default.join(__dirname, "..", "public", "index.html"));
    });
    await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
}
startServer();
