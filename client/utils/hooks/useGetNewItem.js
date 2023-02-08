import { useReducer } from "react";
import { defaultInitialState } from "../itemReducer/itemState";
import { itemReducer } from "../itemReducer/itemReducer";

export const useGetNewItem = () => {
  const [itemState, dispatch] = useReducer(itemReducer, defaultInitialState);
  return { itemState, dispatch };
};
