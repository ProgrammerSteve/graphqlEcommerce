import { prisma } from "../services/prisma";
import { v4 as uuidv4 } from "uuid";
import { Item } from "../services/data";

interface CartItem {
  quantity: number;
  itemId: string;
  id: string;
  cartId: string;
  name: string;
  src: string;
  price: number;
  alt: string;
  stock: number;
  description: string;
  length: number;
  width: number;
  height: number;
  weight: number;
  discontinued: boolean;
  category: string;
}

interface Cart {
  cartId: string;
  cartItems: CartItem[];
}

export async function addCartItem(itemId: string, cartId: string, quantity: number) {
  let item: Item | null = await prisma.item.findUnique({
    where: {
      id: itemId
    }
  })
  if (!item) throw new Error("No item found by the specified itemId")
  const { id, name, src, price, alt, stock, description, length, width, height, weight, discontinued, category } = item;
  let cartItem: CartItem = {
    id: uuidv4(),
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
  }
  return cartItem
}

export async function getCartById(cartId: string) {
  let cartItems: CartItem[] = await prisma.cartItems.findMany({
    where: {
      cartId: cartId
    }
  })
  let cart = {
    cartId: cartId,
    cartItems: cartItems
  }
  return cart
}

export async function updateCartItem(cartItemId: string, cartId: string, quantity: number) {
  let cartItem = await prisma.cartItem.findUnique({
    where: { id: cartItemId }
  })
  if (!cartItem) throw new Error("No cart item found with specified id")
  if (cartItem.quantity <= 1) {
    await prisma.cartItem.delete({
      where: { id: cartItemId },
    })
    let cartItems: CartItem[] = await prisma.cartItems.findMany({
      where: {
        cartId: cartId
      }
    })
    let cart: Cart = {
      cartId: cartId,
      cartItems: cartItems
    }
    return cart
  } else {
    await prisma.cartItem.update({
      where: { id: cartItemId },
      data: { quantity: quantity }
    })
    let cartItems: CartItem[] = await prisma.cartItems.findMany({
      where: {
        cartId: cartId
      }
    })
    let cart: Cart = {
      cartId: cartId,
      cartItems: cartItems
    }
    return cart
  }
}

export async function RemoveCartItem(cartItemId: string, cartId: string) {
  await prisma.cartItem.delete({
    where: { id: cartItemId },
  })
  let cartItems: CartItem[] = await prisma.cartItems.findMany({
    where: {
      cartId: cartId
    }
  })
  let cart: Cart = {
    cartId: cartId,
    cartItems: cartItems
  }
  return cart
}

