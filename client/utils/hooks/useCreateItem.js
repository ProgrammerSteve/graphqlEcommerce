import { useMutation } from "@apollo/client";
import { ADD_NEW_ITEM } from "../gqlQueries/mutations.js";
import { GET_ITEMS } from "../gqlQueries/queries.js";

export const useCreateItem = (itemState) => {
  const [addNewItem, { data, loading, error }] = useMutation(ADD_NEW_ITEM, {
    refetchQueries: [{ query: GET_ITEMS }],
    variables: {
      name: itemState.name,
      src: itemState.src,
      price: itemState.price,
      alt: itemState.alt,
      stock: itemState.stock,
      description: itemState.description,
      length: itemState.length,
      width: itemState.width,
      height: itemState.height,
      weight: itemState.weight,
      category: itemState.category,
      discontinued: itemState.discontinued,
    },
  });

  const handleAddNewItem = async () => {
    try {
      await addNewItem();
    } catch (err) {
      console.log("trycatcherr:", err);
      console.log("error:", error);
    }
  };

  return [handleAddNewItem];
};
