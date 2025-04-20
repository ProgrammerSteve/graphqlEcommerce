import { useReducer } from "react";
import { defaultInitialState } from "../itemReducer/itemState";
import { itemReducer } from "../itemReducer/itemReducer";
import { Item, ItemAction } from "../../src/types";

interface UseGetNewItemReturn {
  itemState: Item;
  dispatch: React.Dispatch<ItemAction>;
}

export const useGetNewItem = (): UseGetNewItemReturn => {
  const [itemState, dispatch] = useReducer(itemReducer, defaultInitialState);
  return { itemState, dispatch };
};