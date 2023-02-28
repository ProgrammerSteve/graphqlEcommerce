"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carts = void 0;
const carts_model_1 = require("./carts.model");
exports.carts = {
    Query: {
        getCartByCartId: async (_, args) => {
            return await (0, carts_model_1.getCartByCartId)(args.cartId);
        },
        getCartIdByEmail: async (_, args) => {
            return await (0, carts_model_1.getCardIdByEmail)(args.email);
        }
    },
    Mutation: {
        addCartItem: async (_, args) => {
            return await (0, carts_model_1.addCartItem)(args.itemId, args.cartId, args.quantity);
        },
        updateCartItem: async (_, args) => {
            return await (0, carts_model_1.updateCartItem)(args.itemId, args.cartId, args.quantity);
        },
        RemoveCartItem: async (_, args) => {
            return await (0, carts_model_1.RemoveCartItem)(args.itemId, args.cartId);
        },
    },
};
