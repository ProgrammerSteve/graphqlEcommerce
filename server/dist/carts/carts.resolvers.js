"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carts = void 0;
const carts_model_1 = require("./carts.model");
exports.carts = {
    Query: {
        cart: async (_, args) => {
            return await (0, carts_model_1.getCartById)(args.cartId);
        },
    },
    Mutation: {
        addCartItem: async (_, args) => {
            return await (0, carts_model_1.addCartItem)(args.itemId, args.cartId, args.quantity);
        },
        updateCartItem: async (_, args) => {
            return await (0, carts_model_1.updateCartItem)(args.cartItemId, args.cartId, args.quantity);
        },
        RemoveCartItem: async (_, args) => {
            return await (0, carts_model_1.RemoveCartItem)(args.cartItemId, args.cartId);
        },
    },
};
