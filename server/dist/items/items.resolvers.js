"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const items_model_1 = require("./items.model");
exports.resolvers = {
    Query: {
        items: () => {
            return (0, items_model_1.getAllItems)();
        },
        itemById: (_, args) => {
            return (0, items_model_1.getItemById)(args.id);
        },
        itemsByPrice: (_, args) => {
            return (0, items_model_1.getItemsByPrice)(args.min, args.max);
        },
    },
    Mutation: {
        addNewItem: (_, args) => {
            return (0, items_model_1.addNewItem)(args.name, args.src, args.price, args.alt, args.stock, args.description, args.length, args.width, args.height, args.weight, args.discontinued, args.category);
        },
        updateItem: (_, args) => {
            return (0, items_model_1.updateItem)(args.id, args.name, args.src, args.price, args.alt, args.stock, args.description, args.length, args.width, args.height, args.weight, args.discontinued, args.category);
        },
    },
};
