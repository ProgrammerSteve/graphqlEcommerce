import { useMutation } from "@apollo/client";
import { UPDATE_ITEM } from "../gqlQueries/mutations.js";
import { GET_ITEMS } from "../gqlQueries/queries.js";

export const useUpdateItem = (itemState) => {
  const [updateItem, { data, loading, error }] = useMutation(UPDATE_ITEM, {
    refetchQueries: [{ query: GET_ITEMS }],
    variables: {
      id: itemState.id,
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

  const handleUpdate = async () => {
    try {
      await updateItem();
    } catch (err) {
      console.log("try catch error:", err);
      console.log("apolloError:", error);
    }
  };

  return [handleUpdate];
};
