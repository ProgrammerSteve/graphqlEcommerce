"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewItemNoDb = exports.updateItemNoDb = exports.getItemsByPriceNoDb = exports.getItemByIdNoDb = exports.getAllItemsNoDb = exports.addNewItem = exports.updateItem = exports.getItemsByPrice = exports.getItemById = exports.getAllItems = void 0;
const uuid_1 = require("uuid");
const data_1 = require("../services/data");
const prisma_1 = require("../services/prisma");
async function getAllItems() {
    return await prisma_1.prisma.item.findMany();
}
exports.getAllItems = getAllItems;
async function getItemById(id) {
    return await prisma_1.prisma.item.findFirst({
        where: { id: id },
    });
}
exports.getItemById = getItemById;
async function getItemsByPrice(min, max) {
    return await prisma_1.prisma.item.findMany({
        where: {
            price: {
                gte: min,
                lte: max,
            },
        },
    });
}
exports.getItemsByPrice = getItemsByPrice;
async function updateItem(id, name, src, price, alt, stock, description, length, width, height, weight, discontinued, category) {
    let updatedItem = {
        id,
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
        category
    };
    return await prisma_1.prisma.item.update({
        where: { id: id },
        data: { ...updatedItem },
    });
}
exports.updateItem = updateItem;
async function addNewItem(name, src, price, alt, stock, description, length, width, height, weight, discontinued, category) {
    const newItem = {
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
    return await prisma_1.prisma.item.create({
        data: newItem,
    });
}
exports.addNewItem = addNewItem;
function getAllItemsNoDb() {
    return data_1.items;
}
exports.getAllItemsNoDb = getAllItemsNoDb;
function getItemByIdNoDb(id) {
    return data_1.items.find((obj) => obj.id === id);
}
exports.getItemByIdNoDb = getItemByIdNoDb;
function getItemsByPriceNoDb(min, max) {
    return data_1.items.filter((item) => {
        if (!item?.price)
            throw new Error(`missing price property in item: ${item.name}`);
        return item.price >= min && item.price <= max;
    });
}
exports.getItemsByPriceNoDb = getItemsByPriceNoDb;
function updateItemNoDb(id, name, src, price, alt, stock, description, length, width, height, weight, discontinued, category) {
    if (!id)
        throw new Error("missing a input parameter: id");
    if (!name)
        throw new Error("missing a input parameter: name");
    if (!src)
        throw new Error("missing a input parameter: src");
    if (!price)
        throw new Error("missing a input parameter: price");
    if (!alt)
        throw new Error("missing a input parameter: alt");
    if (!stock)
        throw new Error("missing a input parameter: stock");
    if (!description)
        throw new Error("missing a input parameter: description");
    if (!length)
        throw new Error("missing a input parameter: length");
    if (!width)
        throw new Error("missing a input parameter: width");
    if (!height)
        throw new Error("missing a input parameter: height");
    if (!weight)
        throw new Error("missing a input parameter: weight");
    if (discontinued === null || discontinued === undefined)
        throw new Error("missing a input parameter: discontinued");
    if (!category)
        throw new Error("missing a input parameter: category");
    let index = null;
    data_1.items.forEach((obj, ind) => {
        if (obj.id === id) {
            index = ind;
        }
    });
    if (index === null) {
        throw new Error("no Item matches inputted id");
    }
    const updatedItem = {
        id,
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
    data_1.items[index] = updatedItem;
    return updatedItem;
}
exports.updateItemNoDb = updateItemNoDb;
function addNewItemNoDb(name, src, price, alt, stock, description, length, width, height, weight, discontinued, category) {
    if (!name)
        throw new Error("missing a input parameter: name");
    if (!src)
        throw new Error("missing a input parameter: src");
    if (!price)
        throw new Error("missing a input parameter: price");
    if (!alt)
        throw new Error("missing a input parameter: alt");
    if (!stock)
        throw new Error("missing a input parameter: stock");
    if (!description)
        throw new Error("missing a input parameter: description");
    if (!length)
        throw new Error("missing a input parameter: length");
    if (!width)
        throw new Error("missing a input parameter: width");
    if (!height)
        throw new Error("missing a input parameter: height");
    if (!weight)
        throw new Error("missing a input parameter: weight");
    if (discontinued === null || discontinued === undefined)
        throw new Error("missing a input parameter: discontinued");
    if (!category)
        throw new Error("missing a input parameter: category");
    const newItem = {
        id: (0, uuid_1.v4)(),
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
    data_1.items.push(newItem);
    return newItem;
}
exports.addNewItemNoDb = addNewItemNoDb;
