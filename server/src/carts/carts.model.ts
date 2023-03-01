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
interface CartTableEntry {
  id: string;
  userId: string;
}
interface CartItemTableEntry {
  id: string;
  cartId: string;
  itemId: string;
  quantity: number;
}

type ItemFormatted = Omit<Item, "id"> & { itemId: string }

interface User {
  id: string;
  name: string;
  email: string;
  emailVerified?: boolean;
  image?: string;
}

const formattedCartItems = async (cartId: string) => {
  let cartItems: CartItemTableEntry[] | null = await prisma.cartItem.findMany({
    where: {
      cartId: cartId
    }
  })
  let items: Item[] | null = await prisma.item.findMany({})
  if (!items) throw new Error("Could not retrieve item info")
  let itemsFormatted: ItemFormatted[] = items.map(item => {
    let { id, ...rest } = item
    return ({
      itemId: id,
      ...rest
    })
  })
  let formattedCartItems: CartItem[] = cartItems.map(cartItem => {
    let correspondingItem = itemsFormatted.filter(item => item.itemId === cartItem.itemId)[0]
    return ({
      quantity: cartItem.quantity,
      cartId: cartItem.cartId,
      id: cartItem.id,
      ...correspondingItem
    })
  })
  return formattedCartItems
}

export async function getCartByCartId(cartId: string) {
  let cart: Cart = {
    cartId: cartId,
    cartItems: await formattedCartItems(cartId)
  }
  return cart
}

export async function getCartIdByEmail(email: string) {
  let user: User | null = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!user) throw new Error("Error: No user found by that email")
  if (!user?.id) throw new Error("Error: No user id found by that email")
  let cartTableEntry: CartTableEntry | null = await prisma.cart.findUnique({
    where: {
      userId: user.id,
    },
  });
  if (!cartTableEntry) throw new Error("Error: No cart found by that email")
  if (!cartTableEntry?.id) throw new Error(`Error: No cartId found in cart for the User whose email is ${email}`)
  let cartIdObj = { cartId: cartTableEntry.id }
  return cartIdObj
}

export async function getCartByEmail(email: string) {
  let user: User | null = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!user) throw new Error("Error: No user found by that email")
  if (!user?.id) throw new Error("Error: No user id found by that email")
  let cartTableEntry: CartTableEntry | null = await prisma.cart.findUnique({
    where: {
      userId: user.id,
    },
  });
  if (!cartTableEntry) throw new Error("Error: No cart found by that email")
  if (!cartTableEntry?.id) throw new Error(`Error: No cartId found in cart for the User whose email is ${email}`)
  let cartId = cartTableEntry.id
  let cart: Cart = {
    cartId: cartId,
    cartItems: await formattedCartItems(cartId)
  }
  return cart
}

export async function addCartItem(itemId: string, cartId: string, quantity: number) {
  let cartItems: CartItemTableEntry[] = await prisma.cartItem.findMany({
    where: {
      cartId: cartId
    }
  })
  if (cartItems.map(item => item.itemId).includes(itemId)) throw new Error("Item already exists in cart and can only be updated, not added")

  let item: Item | null = await prisma.item.findUnique({
    where: {
      id: itemId
    }
  })
  if (!item) throw new Error("No item found by the specified itemId")
  if (item.stock < quantity) throw new Error("Not enough in stock to match the quantity requested")
  const { id, ...rest } = item;
  let cartItem: CartItem = {
    id: uuidv4(),
    cartId: cartId,
    itemId: id,
    quantity,
    ...rest
  }
  let createdItem: CartItemTableEntry = await prisma.cartItem.create({
    data: {
      id: cartItem.id,
      itemId: cartItem.itemId,
      quantity: cartItem.quantity,
      cartId: cartItem.cartId,
    }
  })
  if (!createdItem) throw new Error("Item was not added to Cart")
  let cart: Cart = {
    cartId: cartId,
    cartItems: await formattedCartItems(cartId)
  }
  return cart
}

export async function updateCartItem(itemId: string, cartId: string, quantity: number) {
  let item: Item = await prisma.item.findFirst({
    where: { id: itemId }
  })
  if (!item) throw new Error("Could not find item for referencing stock and quantity")
  if (item.stock < quantity) throw new Error("Quantity requested exceeds the stock of the item")

  let cartItem: CartItemTableEntry = await prisma.cartItem.findFirst({
    where: { cartId: cartId, itemId: itemId }
  })
  if (!cartItem) throw new Error("No cart item found with specified item/cart Ids")

  await prisma.cartItem.update({
    where: { id: cartItem.id },
    data: { quantity: quantity }
  })
  let cart: Cart = {
    cartId: cartId,
    cartItems: await formattedCartItems(cartId)
  }
  return cart
}

export async function RemoveCartItem(itemId: string, cartId: string) {
  let cartItem: CartItemTableEntry = await prisma.cartItem.findFirst({
    where: { cartId: cartId, itemId: itemId }
  })
  if (!cartItem) throw new Error("No cart item found with specified item/cart Ids")
  await prisma.cartItem.delete({
    where: { id: cartItem.id },
  })
  let cart: Cart = {
    cartId: cartId,
    cartItems: await formattedCartItems(cartId)
  }
  return cart
}

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