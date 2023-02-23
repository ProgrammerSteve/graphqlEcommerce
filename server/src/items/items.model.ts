import { v4 as uuidv4 } from "uuid";
import { items, Item } from "../services/data";
import { prisma } from "../services/prisma";

export async function getAllItems() {
  return await prisma.item.findMany()
}
export async function getItemById(id: string) {
  return await prisma.item.findFirst({
    where: { id: id },
  })
}
export async function getItemsByPrice(min: number, max: number) {
  return await prisma.item.findMany({
    where: {
      price: {
        gte: min,
        lte: max,
      },
    },
  })
}
export async function updateItem(
  id: string,
  name: string,
  src: string,
  price: number,
  alt: string,
  stock: number,
  description: string,
  length: number,
  width: number,
  height: number,
  weight: number,
  discontinued: boolean,
  category: string
) {
  let updatedItem: Item = {
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
  }
  return await prisma.item.update({
    where: { id: id },
    data: { ...updatedItem },
  })
}
export async function addNewItem(
  name: string,
  src: string,
  price: number,
  alt: string,
  stock: number,
  description: string,
  length: number,
  width: number,
  height: number,
  weight: number,
  discontinued: boolean,
  category: string
) {

  const newItem: Omit<Item, 'id'> = {
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

  return await prisma.item.create({
    data: newItem,
  })
}


export function getAllItemsNoDb() {
  return items;
}
export function getItemByIdNoDb(id: string) {
  return items.find((obj) => obj.id === id);
}
export function getItemsByPriceNoDb(min: number, max: number) {
  return items.filter((item) => {
    if (!item?.price) throw new Error(`missing price property in item: ${item.name}`);
    return item.price >= min && item.price <= max;
  });
}
export function updateItemNoDb(
  id: string,
  name: string,
  src: string,
  price: number,
  alt: string,
  stock: number,
  description: string,
  length: number,
  width: number,
  height: number,
  weight: number,
  discontinued: boolean,
  category: string
) {
  if (!id) throw new Error("missing a input parameter: id");
  if (!name) throw new Error("missing a input parameter: name");
  if (!src) throw new Error("missing a input parameter: src");
  if (!price) throw new Error("missing a input parameter: price");
  if (!alt) throw new Error("missing a input parameter: alt");
  if (!stock) throw new Error("missing a input parameter: stock");
  if (!description) throw new Error("missing a input parameter: description");
  if (!length) throw new Error("missing a input parameter: length");
  if (!width) throw new Error("missing a input parameter: width");
  if (!height) throw new Error("missing a input parameter: height");
  if (!weight) throw new Error("missing a input parameter: weight");
  if (discontinued === null || discontinued === undefined)
    throw new Error("missing a input parameter: discontinued");
  if (!category) throw new Error("missing a input parameter: category");
  let index: number | null = null;
  items.forEach((obj, ind) => {
    if (obj.id === id) {
      index = ind;
    }
  });
  if (index === null) {
    throw new Error("no Item matches inputted id");
  }
  const updatedItem: Item = {
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
export function addNewItemNoDb(
  name: string,
  src: string,
  price: number,
  alt: string,
  stock: number,
  description: string,
  length: number,
  width: number,
  height: number,
  weight: number,
  discontinued: boolean,
  category: string
) {
  if (!name) throw new Error("missing a input parameter: name");
  if (!src) throw new Error("missing a input parameter: src");
  if (!price) throw new Error("missing a input parameter: price");
  if (!alt) throw new Error("missing a input parameter: alt");
  if (!stock) throw new Error("missing a input parameter: stock");
  if (!description) throw new Error("missing a input parameter: description");
  if (!length) throw new Error("missing a input parameter: length");
  if (!width) throw new Error("missing a input parameter: width");
  if (!height) throw new Error("missing a input parameter: height");
  if (!weight) throw new Error("missing a input parameter: weight");
  if (discontinued === null || discontinued === undefined)
    throw new Error("missing a input parameter: discontinued");
  if (!category) throw new Error("missing a input parameter: category");

  const newItem: Item = {
    id: uuidv4(),
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