"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const schema_1 = require("@graphql-tools/schema");
const path_1 = __importDefault(require("path"));
const http_1 = __importDefault(require("http"));
const items_graphql_1 = require("./items/items.graphql");
const carts_graphql_1 = require("./carts/carts.graphql");
const items_resolvers_1 = require("./items/items.resolvers");
const carts_resolvers_1 = require("./carts/carts.resolvers");
const express4_1 = require("@apollo/server/express4");
const drainHttpServer_1 = require("@apollo/server/plugin/drainHttpServer");
const app_1 = require("./app");
const PORT = process.env.PORT || 8000;
const httpServer = http_1.default.createServer(app_1.app);
const itemSchema = (0, schema_1.makeExecutableSchema)({
    typeDefs: items_graphql_1.typeDefs,
    resolvers: items_resolvers_1.items,
});
const cartSchema = (0, schema_1.makeExecutableSchema)({
    typeDefs: carts_graphql_1.typeDefs,
    resolvers: carts_resolvers_1.carts,
});
const schema = (0, schema_1.mergeSchemas)({ schemas: [itemSchema, cartSchema] });
const server = new server_1.ApolloServer({
    schema: schema,
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
