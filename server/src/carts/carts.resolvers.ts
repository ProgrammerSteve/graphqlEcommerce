import { RemoveCartItem, updateCartItem, addCartItem, getCartByCartId, getCardIdByEmail } from './carts.model'

export const carts = {
  Query: {
    getCartByCartId: async (_, args: { cartId: string }) => {
      return await getCartByCartId(args.cartId);
    },
    getCartIdByEmail: async (_, args: { email: string }) => {
      return await getCardIdByEmail(args.email)
    }
  },
  Mutation: {
    addCartItem: async (_, args: { itemId: string, cartId: string, quantity: number }) => {
      return await addCartItem(args.itemId, args.cartId, args.quantity)
    },
    updateCartItem: async (_, args: { itemId: string, cartId: string, quantity: number }) => {
      return await updateCartItem(
        args.itemId,
        args.cartId,
        args.quantity,
      );
    },
    RemoveCartItem: async (_, args: { itemId: string, cartId: string }) => {
      return await RemoveCartItem(
        args.itemId,
        args.cartId,
      );
    },
  },
};