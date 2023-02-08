import { useQuery } from "@apollo/client";
import { GET_ITEM_BY_ID } from "../gqlQueries/queries";
import { useEffect, useReducer, useState } from "react";
import { defaultInitialState } from "../itemReducer/itemState";
import { itemReducer } from "../itemReducer/itemReducer";
import { ITEM_CONST } from "../itemReducer/itemConstants";

export const useGetItemById = (id) => {
  const { data, loading, error } = useQuery(GET_ITEM_BY_ID, {
    variables: { id: id },
  });

  const [itemState, dispatch] = useReducer(itemReducer, defaultInitialState);
  const handleState = (newState) => {
    dispatch({
      type: ITEM_CONST.setState,
      payload: newState,
    });
  };
  useEffect(() => {
    handleState(data?.itemById);
  }, [data]);

  return { loading, itemState, dispatch };
};
