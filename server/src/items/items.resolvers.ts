import { getAllItems, getItemById, getItemsByPrice, updateItem, addNewItem } from "./items.model"

export const resolvers = {
  Query: {
    items: () => {
      return getAllItems();
    },
    itemById: (_, args: { id: string }) => {
      return getItemById(args.id);
    },
    itemsByPrice: (_, args: { min: number, max: number }) => {
      return getItemsByPrice(args.min, args.max);
    },
  },

  Mutation: {
    addNewItem: (_, args: { name: string, src: string, price: number, alt: string, stock: number, description: string, length: number, width: number, height: number, weight: number, discontinued: boolean, category: string }) => {
      return addNewItem(
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

    updateItem: (_, args: { id: string, name: string, src: string, price: number, alt: string, stock: number, description: string, length: number, width: number, height: number, weight: number, discontinued: boolean, category: string }) => {
      return updateItem(
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
