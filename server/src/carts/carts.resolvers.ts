import { RemoveCartItem, upsertCartItem, getCartById } from './carts.model'

export const resolvers = {
  Query: {
    items: async (_, args: { cartId: string }) => {
      return await getCartById(args.cartId);
    },
  },
  Mutation: {
    upsertCartItem: async (_, args: { cartItemId: string, cartId: string, quantity: number }) => {
      return await upsertCartItem(
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