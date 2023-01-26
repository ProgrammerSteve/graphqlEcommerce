const itemsModel = require("./items.model");

module.exports = {
  Query: {
    items: () => {
      return itemsModel.getAllItems();
    },
    itemById: (_, args) => {
      return itemsModel.getItemById(args.id);
    },
    itemsByPrice: (_, args) => {
      return itemsModel.getItemsByPrice(args.min, args.max);
    },
  },
  Mutation: {
    addNewItem: (_, args) => {
      return itemsModel.addNewItem(
        args.name,
        args.src,
        args.price,
        args.alt,
        args.stock,
        args.description
      );
    },

    updateItem: (_, args) => {
      return itemsModel.updateItem(
        args.id,
        args.name,
        args.src,
        args.price,
        args.alt,
        args.stock,
        args.description
      );
    },
  },
};
