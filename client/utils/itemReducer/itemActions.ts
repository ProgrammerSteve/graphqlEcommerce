import { ITEM_CONST } from "./itemConstants";
import { ItemAction } from "../../src/types";
import React from "react";

type DispatchFunction = React.Dispatch<ItemAction>;
type InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
type ButtonClickHandler = () => void;

export const handleName = (dispatch: DispatchFunction): InputChangeHandler => (e) =>
  dispatch({ type: ITEM_CONST.name, payload: e.target.value });

export const handleStock = (dispatch: DispatchFunction): InputChangeHandler => (e) =>
  dispatch({ type: ITEM_CONST.stock, payload: Number(e.target.value) });

export const handlePrice = (dispatch: DispatchFunction): InputChangeHandler => (e) =>
  dispatch({ type: ITEM_CONST.price, payload: Number(e.target.value) });

export const handleAlt = (dispatch: DispatchFunction): InputChangeHandler => (e) =>
  dispatch({ type: ITEM_CONST.alt, payload: e.target.value });

export const handleDescription = (dispatch: DispatchFunction): InputChangeHandler => (e) =>
  dispatch({ type: ITEM_CONST.description, payload: e.target.value });

export const handleSrc = (dispatch: DispatchFunction): InputChangeHandler => (e) =>
  dispatch({ type: ITEM_CONST.src, payload: e.target.value });

export const handleLength = (dispatch: DispatchFunction): InputChangeHandler => (e) =>
  dispatch({ type: ITEM_CONST.length, payload: Number(e.target.value) });

export const handleWidth = (dispatch: DispatchFunction): InputChangeHandler => (e) =>
  dispatch({ type: ITEM_CONST.width, payload: Number(e.target.value) });

export const handleHeight = (dispatch: DispatchFunction): InputChangeHandler => (e) =>
  dispatch({ type: ITEM_CONST.height, payload: Number(e.target.value) });

export const handleWeight = (dispatch: DispatchFunction): InputChangeHandler => (e) =>
  dispatch({ type: ITEM_CONST.weight, payload: Number(e.target.value) });

export const handleCategory = (dispatch: DispatchFunction): InputChangeHandler => (e) =>
  dispatch({ type: ITEM_CONST.category, payload: e.target.value });

export const handleDiscontinuedTrue = (dispatch: DispatchFunction): ButtonClickHandler => () =>
  dispatch({ type: ITEM_CONST.discontinued, payload: true });

export const handleDiscontinuedFalse = (dispatch: DispatchFunction): ButtonClickHandler => () =>
  dispatch({ type: ITEM_CONST.discontinued, payload: false });

interface ItemHandlers {
  name: InputChangeHandler;
  stock: InputChangeHandler;
  price: InputChangeHandler;
  alt: InputChangeHandler;
  description: InputChangeHandler;
  src: InputChangeHandler;
  length: InputChangeHandler;
  width: InputChangeHandler;
  height: InputChangeHandler;
  weight: InputChangeHandler;
  category: InputChangeHandler;
  discontinuedTrue: ButtonClickHandler;
  discontinuedFalse: ButtonClickHandler;
}

export const handlers = (dispatch: DispatchFunction): ItemHandlers => {
  return {
    name: handleName(dispatch),
    stock: handleStock(dispatch),
    price: handlePrice(dispatch),
    alt: handleAlt(dispatch),
    description: handleDescription(dispatch),
    src: handleSrc(dispatch),
    length: handleLength(dispatch),
    width: handleWidth(dispatch),
    height: handleHeight(dispatch),
    weight: handleWeight(dispatch),
    category: handleCategory(dispatch),
    discontinuedTrue: handleDiscontinuedTrue(dispatch),
    discontinuedFalse: handleDiscontinuedFalse(dispatch),
  };
};