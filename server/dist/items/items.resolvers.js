"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const items_model_1 = require("./items.model");
exports.resolvers = {
    Query: {
        items: async () => {
            return await (0, items_model_1.getAllItems)();
        },
        itemById: async (_, args) => {
            return await (0, items_model_1.getItemById)(args.id);
        },
        itemsByPrice: async (_, args) => {
            return await (0, items_model_1.getItemsByPrice)(args.min, args.max);
        },
    },
    Mutation: {
        addNewItem: async (_, args) => {
            return await (0, items_model_1.addNewItem)(args.name, args.src, args.price, args.alt, args.stock, args.description, args.length, args.width, args.height, args.weight, args.discontinued, args.category);
        },
        updateItem: async (_, args) => {
            return await (0, items_model_1.updateItem)(args.id, args.name, args.src, args.price, args.alt, args.stock, args.description, args.length, args.width, args.height, args.weight, args.discontinued, args.category);
        },
    },
};
