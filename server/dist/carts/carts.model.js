"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveCartItem = exports.updateCartItem = exports.addCartItem = exports.getCartByEmail = exports.getCartIdByEmail = exports.getCartByCartId = void 0;
const prisma_1 = require("../services/prisma");
const uuid_1 = require("uuid");
const formattedCartItems = async (cartId) => {
    let cartItems = await prisma_1.prisma.cartItem.findMany({
        where: {
            cartId: cartId
        }
    });
    let items = await prisma_1.prisma.item.findMany({});
    if (!items)
        throw new Error("Could not retrieve item info");
    let itemsFormatted = items.map(item => {
        let { id, ...rest } = item;
        return ({
            itemId: id,
            ...rest
        });
    });
    let formattedCartItems = cartItems.map(cartItem => {
        let correspondingItem = itemsFormatted.filter(item => item.itemId === cartItem.itemId)[0];
        return ({
            quantity: cartItem.quantity,
            cartId: cartItem.cartId,
            id: cartItem.id,
            ...correspondingItem
        });
    });
    return formattedCartItems;
};
async function getCartByCartId(cartId) {
    let cart = {
        cartId: cartId,
        cartItems: await formattedCartItems(cartId)
    };
    return cart;
}
exports.getCartByCartId = getCartByCartId;
async function getCartIdByEmail(email) {
    let user = await prisma_1.prisma.user.findUnique({
        where: {
            email: email,
        },
    });
    if (!user)
        throw new Error("Error: No user found by that email");
    if (!user?.id)
        throw new Error("Error: No user id found by that email");
    let cartTableEntry = await prisma_1.prisma.cart.findUnique({
        where: {
            userId: user.id,
        },
    });
    if (!cartTableEntry)
        throw new Error("Error: No cart found by that email");
    if (!cartTableEntry?.id)
        throw new Error(`Error: No cartId found in cart for the User whose email is ${email}`);
    let cartIdObj = { cartId: cartTableEntry.id };
    return cartIdObj;
}
exports.getCartIdByEmail = getCartIdByEmail;
async function getCartByEmail(email) {
    let user = await prisma_1.prisma.user.findUnique({
        where: {
            email: email,
        },
    });
    if (!user)
        throw new Error("Error: No user found by that email");
    if (!user?.id)
        throw new Error("Error: No user id found by that email");
    let cartTableEntry = await prisma_1.prisma.cart.findUnique({
        where: {
            userId: user.id,
        },
    });
    if (!cartTableEntry)
        throw new Error("Error: No cart found by that email");
    if (!cartTableEntry?.id)
        throw new Error(`Error: No cartId found in cart for the User whose email is ${email}`);
    let cartId = cartTableEntry.id;
    let cart = {
        cartId: cartId,
        cartItems: await formattedCartItems(cartId)
    };
    return cart;
}
exports.getCartByEmail = getCartByEmail;
async function addCartItem(itemId, cartId, quantity) {
    let cartItems = await prisma_1.prisma.cartItem.findMany({
        where: {
            cartId: cartId
        }
    });
    if (cartItems.map(item => item.itemId).includes(itemId))
        throw new Error("Item already exists in cart and can only be updated, not added");
    let item = await prisma_1.prisma.item.findUnique({
        where: {
            id: itemId
        }
    });
    if (!item)
        throw new Error("No item found by the specified itemId");
    if (item.stock < quantity)
        throw new Error("Not enough in stock to match the quantity requested");
    const { id, ...rest } = item;
    let cartItem = {
        id: (0, uuid_1.v4)(),
        cartId: cartId,
        itemId: id,
        quantity,
        ...rest
    };
    let createdItem = await prisma_1.prisma.cartItem.create({
        data: {
            id: cartItem.id,
            itemId: cartItem.itemId,
            quantity: cartItem.quantity,
            cartId: cartItem.cartId,
        }
    });
    if (!createdItem)
        throw new Error("Item was not added to Cart");
    let cart = {
        cartId: cartId,
        cartItems: await formattedCartItems(cartId)
    };
    return cart;
}
exports.addCartItem = addCartItem;
async function updateCartItem(itemId, cartId, quantity) {
    let item = await prisma_1.prisma.item.findFirst({
        where: { id: itemId }
    });
    if (!item)
        throw new Error("Could not find item for referencing stock and quantity");
    if (item.stock < quantity)
        throw new Error("Quantity requested exceeds the stock of the item");
    let cartItem = await prisma_1.prisma.cartItem.findFirst({
        where: { cartId: cartId, itemId: itemId }
    });
    if (!cartItem)
        throw new Error("No cart item found with specified item/cart Ids");
    await prisma_1.prisma.cartItem.update({
        where: { id: cartItem.id },
        data: { quantity: quantity }
    });
    let cart = {
        cartId: cartId,
        cartItems: await formattedCartItems(cartId)
    };
    return cart;
}
exports.updateCartItem = updateCartItem;
async function RemoveCartItem(itemId, cartId) {
    let cartItem = await prisma_1.prisma.cartItem.findFirst({
        where: { cartId: cartId, itemId: itemId }
    });
    if (!cartItem)
        throw new Error("No cart item found with specified item/cart Ids");
    await prisma_1.prisma.cartItem.delete({
        where: { id: cartItem.id },
    });
    let cart = {
        cartId: cartId,
        cartItems: await formattedCartItems(cartId)
    };
    return cart;
}
exports.RemoveCartItem = RemoveCartItem;
/*
tests needed:
cartItem gets added
cartItem gets deleted
cartItem gets updated
cart gets retrieved by id
cart gets retrieved by email
adding cart item already in existence
adding qty higher than stock
updating qty higher than stock
updating item that doesn't exist
adding item that doesn't exist
deleting item that doesn't exist
getting cart that doesn't exist
*/ 
