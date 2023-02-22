"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewItem = exports.updateItem = exports.getItemsByPrice = exports.getItemById = exports.getAllItems = void 0;
const uuid_1 = require("uuid");
const items = [
    {
        name: "Soda",
        src: "https://images.unsplash.com/photo-1553456558-aff63285bdd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 1.1,
        alt: "soda pic",
        stock: 10,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: "00001",
        length: 1.0,
        width: 1.0,
        height: 1.0,
        weight: 1.0,
        discontinued: false,
        category: "category1",
    },
    {
        name: "Controller",
        src: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 20.5,
        alt: "controller pic",
        stock: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: "00002",
        length: 1.0,
        width: 1.0,
        height: 1.0,
        weight: 1.0,
        discontinued: false,
        category: "category1",
    },
    {
        name: "Backpack",
        src: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 30.5,
        alt: "backpack pic",
        stock: 3,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: "00003",
        length: 1.0,
        width: 1.0,
        height: 1.0,
        weight: 1.0,
        discontinued: false,
        category: "category1",
    },
    {
        name: "Shoes",
        src: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        price: 25.15,
        alt: "shoes pic",
        stock: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: "00004",
        length: 1.0,
        width: 1.0,
        height: 1.0,
        weight: 1.0,
        discontinued: false,
        category: "category1",
    },
    {
        name: "Camera",
        src: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
        price: 65.15,
        alt: "camera pic",
        stock: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: "00005",
        length: 1.0,
        width: 1.0,
        height: 1.0,
        weight: 1.0,
        discontinued: false,
        category: "category1",
    },
    {
        name: "Headphones",
        src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80",
        price: 20.15,
        alt: "head phones pic",
        stock: 2,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: "00006",
        length: 1.0,
        width: 1.0,
        height: 1.0,
        weight: 1.0,
        discontinued: false,
        category: "category1",
    },
    {
        name: "Watch",
        src: "https://images.unsplash.com/photo-1555487505-8603a1a69755?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        price: 29.99,
        alt: "watch pic",
        stock: 12,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: "00007",
        length: 1.0,
        width: 1.0,
        height: 1.0,
        weight: 1.0,
        discontinued: false,
        category: "category1",
    },
    {
        name: "Bottle",
        src: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 9.99,
        alt: "bottle pic",
        stock: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: "00008",
        length: 1.0,
        width: 1.0,
        height: 1.0,
        weight: 1.0,
        discontinued: false,
        category: "category1",
    },
    {
        name: "Pen",
        src: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=375&q=80",
        price: 3.99,
        alt: "pen pic",
        stock: 19,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: "00009",
        length: 1.0,
        width: 1.0,
        height: 1.0,
        weight: 1.0,
        discontinued: false,
        category: "category1",
    },
    {
        name: "Hair Dryer",
        src: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        price: 15.0,
        alt: "hair dryer pic",
        stock: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: "00010",
        length: 1.0,
        width: 1.0,
        height: 1.0,
        weight: 1.0,
        discontinued: false,
        category: "category1",
    },
    {
        name: "Guitar",
        src: "https://images.unsplash.com/photo-1588449668365-d15e397f6787?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 200.0,
        alt: "guitar",
        stock: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: "00011",
        length: 1.0,
        width: 1.0,
        height: 1.0,
        weight: 1.0,
        discontinued: false,
        category: "category1",
    },
    {
        name: "Stool",
        src: "https://images.unsplash.com/photo-1551907234-fb773fb08a2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=456&q=80",
        price: 12.99,
        alt: "stool",
        stock: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: "00012",
        length: 1.0,
        width: 1.0,
        height: 1.0,
        weight: 1.0,
        discontinued: false,
        category: "category1",
    },
    {
        name: "Drone",
        src: "https://images.unsplash.com/photo-1588434013438-e1dd134eda16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
        price: 299.99,
        alt: "drone",
        stock: 2,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: "00013",
        length: 1.0,
        width: 1.0,
        height: 1.0,
        weight: 1.0,
        discontinued: false,
        category: "category1",
    },
    {
        name: "Redbull",
        src: "https://images.unsplash.com/photo-1612635901022-20ae4c268753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=383&q=80",
        price: 2.0,
        alt: "redbull",
        stock: 49,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: "00014",
        length: 1.0,
        width: 1.0,
        height: 1.0,
        weight: 1.0,
        discontinued: false,
        category: "category1",
    },
    {
        name: "Fishing Pole",
        src: "https://images.unsplash.com/photo-1612199621372-42d749064d0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njk3fHxwcm9kdWN0fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        price: 20.0,
        alt: "a fishing pole",
        stock: 10,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: "00015",
        length: 1.0,
        width: 1.0,
        height: 1.0,
        weight: 1.0,
        discontinued: false,
        category: "category1",
    },
    {
        name: "Glasses",
        src: "https://images.unsplash.com/photo-1640398097288-c2cd41fef8f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
        price: 7.0,
        alt: "glasses",
        stock: 6,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: "00016",
        length: 1.0,
        width: 1.0,
        height: 1.0,
        weight: 1.0,
        discontinued: false,
        category: "category1",
    },
    {
        name: "Laptop",
        src: "https://images.unsplash.com/photo-1660945742817-217842d82b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE4MXx8cHJvZHVjdHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
        price: 500.0,
        alt: "laptop",
        stock: 8,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: "00017",
        length: 1.0,
        width: 1.0,
        height: 1.0,
        weight: 1.0,
        discontinued: false,
        category: "category1",
    },
    {
        name: "Candle",
        src: "https://images.unsplash.com/photo-1646564424047-07f8687a658f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1OXx8cHJvZHVjdHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
        price: 4.0,
        alt: "candle",
        stock: 26,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: "00018",
        length: 1.0,
        width: 1.0,
        height: 1.0,
        weight: 1.0,
        discontinued: false,
        category: "category1",
    },
    {
        name: "Popsicle",
        src: "https://images.unsplash.com/photo-1642997657279-63c78b41a6ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE3N3x8cHJvZHVjdHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
        price: 1.0,
        alt: "popsicle",
        stock: 70,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: "00019",
        length: 1.0,
        width: 1.0,
        height: 1.0,
        weight: 1.0,
        discontinued: false,
        category: "category1",
    },
    {
        name: "Gamer Chair",
        src: "https://images.unsplash.com/photo-1670946839270-cc4febd43b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMzNHx8cHJvZHVjdHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
        price: 199.0,
        alt: "gamer chair",
        stock: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: "00020",
        length: 1.0,
        width: 1.0,
        height: 1.0,
        weight: 1.0,
        discontinued: false,
        category: "category1",
    },
    {
        name: "Lighter",
        src: "https://images.unsplash.com/photo-1670879290622-4bd7c95161a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 3.0,
        alt: "a lighter",
        stock: 42,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: "00021",
        length: 1.0,
        width: 1.0,
        height: 1.0,
        weight: 1.0,
        discontinued: false,
        category: "category1",
    },
    {
        name: "Helmet",
        src: "https://images.unsplash.com/photo-1657382554016-002193caad67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQxOHx8cHJvZHVjdHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
        price: 40.0,
        alt: "helmet",
        stock: 8,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: "00022",
        length: 1.0,
        width: 1.0,
        height: 1.0,
        weight: 1.0,
        discontinued: false,
        category: "category1",
    },
];
function getAllItems() {
    return items;
}
exports.getAllItems = getAllItems;
function getItemById(id) {
    return items.find((obj) => obj.id === id);
}
exports.getItemById = getItemById;
function getItemsByPrice(min, max) {
    return items.filter((item) => {
        if (!item?.price)
            throw new Error(`missing price property in item: ${item.name}`);
        return item.price >= min && item.price <= max;
    });
}
exports.getItemsByPrice = getItemsByPrice;
function updateItem(id, name, src, price, alt, stock, description, length, width, height, weight, discontinued, category) {
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
    items.forEach((obj, ind) => {
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
    items[index] = updatedItem;
    return updatedItem;
}
exports.updateItem = updateItem;
function addNewItem(name, src, price, alt, stock, description, length, width, height, weight, discontinued, category) {
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
    items.push(newItem);
    return newItem;
}
exports.addNewItem = addNewItem;
