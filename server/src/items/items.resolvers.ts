import { getAllItems, getItemById, getItemsByPrice, updateItem, addNewItem } from "./items.model"

export const resolvers = {
  Query: {
    items: async () => {
      return await getAllItems();
    },
    itemById: async (_, args: { id: string }) => {
      return await getItemById(args.id);
    },
    itemsByPrice: async (_, args: { min: number, max: number }) => {
      return await getItemsByPrice(args.min, args.max);
    },
  },

  Mutation: {
    addNewItem: async (_, args: { name: string, src: string, price: number, alt: string, stock: number, description: string, length: number, width: number, height: number, weight: number, discontinued: boolean, category: string }) => {
      return await addNewItem(
        args.name,
        args.src,
        args.price,
        args.alt,
        args.stock,
        args.description,
        args.length,
        args.width,
        args.height,
        args.weight,
        args.discontinued,
        args.category
      );
    },

    updateItem: async (_, args: { id: string, name: string, src: string, price: number, alt: string, stock: number, description: string, length: number, width: number, height: number, weight: number, discontinued: boolean, category: string }) => {
      return await updateItem(
        args.id,
        args.name,
        args.src,
        args.price,
        args.alt,
        args.stock,
        args.description,
        args.length,
        args.width,
        args.height,
        args.weight,
        args.discontinued,
        args.category
      );
    },
  },
};
