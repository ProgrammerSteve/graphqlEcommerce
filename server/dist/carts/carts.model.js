"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveCartItem = exports.updateCartItem = exports.getCartById = exports.addCartItem = void 0;
const prisma_1 = require("../services/prisma");
const uuid_1 = require("uuid");
async function addCartItem(itemId, cartId, quantity) {
    let item = await prisma_1.prisma.item.findUnique({
        where: {
            id: itemId
        }
    });
    if (!item)
        throw new Error("No item found by the specified itemId");
    const { id, name, src, price, alt, stock, description, length, width, height, weight, discontinued, category } = item;
    let cartItem = {
        id: (0, uuid_1.v4)(),
        cartId: cartId,
        itemId: id,
        quantity,
        name,
        src,
        price,
        alt,
        stock,
        description,
        length,
        width,
        height,
        weight,
        discontinued,
        category,
    };
    return cartItem;
}
exports.addCartItem = addCartItem;
async function getCartById(cartId) {
    let cartItems = await prisma_1.prisma.cartItems.findMany({
        where: {
            cartId: cartId
        }
    });
    let cart = {
        cartId: cartId,
        cartItems: cartItems
    };
    return cart;
}
exports.getCartById = getCartById;
async function updateCartItem(cartItemId, cartId, quantity) {
    let cartItem = await prisma_1.prisma.cartItem.findUnique({
        where: { id: cartItemId }
    });
    if (!cartItem)
        throw new Error("No cart item found with specified id");
    if (cartItem.quantity <= 1) {
        await prisma_1.prisma.cartItem.delete({
            where: { id: cartItemId },
        });
        let cartItems = await prisma_1.prisma.cartItems.findMany({
            where: {
                cartId: cartId
            }
        });
        let cart = {
            cartId: cartId,
            cartItems: cartItems
        };
        return cart;
    }
    else {
        await prisma_1.prisma.cartItem.update({
            where: { id: cartItemId },
            data: { quantity: quantity }
        });
        let cartItems = await prisma_1.prisma.cartItems.findMany({
            where: {
                cartId: cartId
            }
        });
        let cart = {
            cartId: cartId,
            cartItems: cartItems
        };
        return cart;
    }
}
exports.updateCartItem = updateCartItem;
async function RemoveCartItem(cartItemId, cartId) {
    await prisma_1.prisma.cartItem.delete({
        where: { id: cartItemId },
    });
    let cartItems = await prisma_1.prisma.cartItems.findMany({
        where: {
            cartId: cartId
        }
    });
    let cart = {
        cartId: cartId,
        cartItems: cartItems
    };
    return cart;
}
exports.RemoveCartItem = RemoveCartItem;
