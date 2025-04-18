import { useQuery } from "@apollo/client";
import { GET_ITEM_BY_ID } from "../gqlQueries/queries";
import { useEffect, useReducer } from "react";
import { defaultInitialState } from "../itemReducer/itemState";
import { itemReducer } from "../itemReducer/itemReducer";
import { ITEM_CONST } from "../itemReducer/itemConstants";
import { Item, ItemAction } from "../../src/types";

interface UseGetItemByIdReturn {
  loading: boolean;
  itemState: Item;
  dispatch: React.Dispatch<ItemAction>;
}

export const useGetItemById = (id: string): UseGetItemByIdReturn => {
  const { data, loading, error } = useQuery(GET_ITEM_BY_ID, {
    variables: { id: id },
  });

  const [itemState, dispatch] = useReducer(itemReducer, defaultInitialState);
  
  const handleState = (newState: Item): void => {
    dispatch({
      type: ITEM_CONST.setState,
      payload: newState,
    });
  };
  
  useEffect(() => {
    if (data?.itemById) {
      handleState(data.itemById);
    }
  }, [data]);

  return { loading, itemState, dispatch };
};