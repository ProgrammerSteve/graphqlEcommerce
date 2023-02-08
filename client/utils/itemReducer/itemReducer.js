import { ITEM_CONST } from "./itemConstants.js";

export const itemReducer = (state, action) => {
  switch (action.type) {
    case ITEM_CONST.name:
      return { ...state, name: action.payload };
    case ITEM_CONST.stock:
      return { ...state, stock: action.payload };
    case ITEM_CONST.price:
      return { ...state, price: action.payload };
    case ITEM_CONST.alt:
      return { ...state, alt: action.payload };
    case ITEM_CONST.description:
      return { ...state, description: action.payload };
    case ITEM_CONST.src:
      return { ...state, src: action.payload };
    case ITEM_CONST.length:
      return { ...state, length: action.payload };
    case ITEM_CONST.width:
      return { ...state, width: action.payload };
    case ITEM_CONST.height:
      return { ...state, height: action.payload };
    case ITEM_CONST.weight:
      return { ...state, weight: action.payload };
    case ITEM_CONST.category:
      return { ...state, category: action.payload };
    case ITEM_CONST.discontinued:
      return { ...state, discontinued: action.payload };
    case ITEM_CONST.id:
      return { ...state, id: action.payload };
    case ITEM_CONST.setState:
      return { ...action.payload };
    default:
      return state;
  }
};
