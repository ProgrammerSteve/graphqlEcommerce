import { RemoveCartItem, updateCartItem, addCartItem, getCartById } from './carts.model'

export const carts = {
  Query: {
    cart: async (_, args: { cartId: string }) => {
      return await getCartById(args.cartId);
    },
  },
  Mutation: {
    addCartItem: async (_, args: { itemId: string, cartId: string, quantity: number }) => {
      return await addCartItem(args.itemId, args.cartId, args.quantity)
    },
    updateCartItem: async (_, args: { cartItemId: string, cartId: string, quantity: number }) => {
      return await updateCartItem(
        args.cartItemId,
        args.cartId,
        args.quantity,
      );
    },
    RemoveCartItem: async (_, args: { cartItemId: string, cartId: string }) => {
      return await RemoveCartItem(
        args.cartItemId,
        args.cartId,
      );
    },
  },
};