import { ITEM_CONST } from "./itemConstants";

export const handleName = (dispatch) => (e) =>
  dispatch({ type: ITEM_CONST.name, payload: e.target.value });
export const handleStock = (dispatch) => (e) =>
  dispatch({ type: ITEM_CONST.stock, payload: Number(e.target.value) });
export const handlePrice = (dispatch) => (e) =>
  dispatch({ type: ITEM_CONST.price, payload: Number(e.target.value) });
export const handleAlt = (dispatch) => (e) =>
  dispatch({ type: ITEM_CONST.alt, payload: e.target.value });
export const handleDescription = (dispatch) => (e) =>
  dispatch({ type: ITEM_CONST.description, payload: e.target.value });
export const handleSrc = (dispatch) => (e) =>
  dispatch({ type: ITEM_CONST.src, payload: e.target.value });
export const handleLength = (dispatch) => (e) =>
  dispatch({ type: ITEM_CONST.length, payload: Number(e.target.value) });
export const handleWidth = (dispatch) => (e) =>
  dispatch({ type: ITEM_CONST.width, payload: Number(e.target.value) });
export const handleHeight = (dispatch) => (e) =>
  dispatch({ type: ITEM_CONST.height, payload: Number(e.target.value) });
export const handleWeight = (dispatch) => (e) =>
  dispatch({ type: ITEM_CONST.weight, payload: Number(e.target.value) });
export const handleCategory = (dispatch) => (e) =>
  dispatch({ type: ITEM_CONST.category, payload: e.target.value });
export const handleDiscontinuedTrue = (dispatch) => () =>
  dispatch({ type: ITEM_CONST.discontinued, payload: true });
export const handleDiscontinuedFalse = (dispatch) => () =>
  dispatch({ type: ITEM_CONST.discontinued, payload: false });

export const handlers = (dispatch) => {
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
