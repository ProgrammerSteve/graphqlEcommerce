"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const prisma_1 = require("./services/prisma");
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)({
    origin: "*",
}));
exports.app.use((0, morgan_1.default)("combined"));
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public")));
exports.app.get("/seedItems", async (req, res) => {
    res.send(await (0, prisma_1.prismaSeedItems)());
});
exports.app.get("/getItems", async (req, res) => {
    res.send(await (0, prisma_1.prismaGetItems)());
});
exports.app.get("/*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "public", "index.html"));
});
