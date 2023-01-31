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
        args.description,
        args.length,
        args.width,
        args.height,
        args.weight,
        args.discontinued,
        args.category
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
