"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaGetItems = exports.prismaSeedItems = exports.prisma = void 0;
const { PrismaClient } = require("@prisma/client");
exports.prisma = new PrismaClient();
const data_1 = require("./data");
async function prismaSeedItems() {
    return await exports.prisma.item.createMany({
        data: data_1.itemsNoId
    });
}
exports.prismaSeedItems = prismaSeedItems;
async function prismaGetItems() {
    return await exports.prisma.item.findMany({});
}
exports.prismaGetItems = prismaGetItems;
