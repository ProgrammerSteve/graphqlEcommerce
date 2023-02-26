import { prisma } from "../services/prisma";
import { v4 as uuidv4 } from "uuid";

interface CartItem {
  quantity: number;
  cartItemId: string;
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

export async function getCartById(cartId: string) {
  //returns cart
}
export async function upsertCartItem(cartItemId: string, cartId: string, quantity: number) {
  //returns cart
}
export async function RemoveCartItem(cartItemId: string, cartId: string) {
  //returns cart
}

