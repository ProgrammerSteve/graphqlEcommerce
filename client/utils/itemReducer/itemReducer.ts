import { ITEM_CONST } from "./itemConstants";
import { Item, ItemAction } from "../../src/types";

export const itemReducer = (state: Item, action: ItemAction): Item => {
  switch (action.type) {
    case ITEM_CONST.name:
      return { ...state, name: action.payload as string };
    case ITEM_CONST.stock:
      return { ...state, stock: action.payload as number };
    case ITEM_CONST.price:
      return { ...state, price: action.payload as number };
    case ITEM_CONST.alt:
      return { ...state, alt: action.payload as string };
    case ITEM_CONST.description:
      return { ...state, description: action.payload as string };
    case ITEM_CONST.src:
      return { ...state, src: action.payload as string };
    case ITEM_CONST.length:
      return { ...state, length: action.payload as number };
    case ITEM_CONST.width:
      return { ...state, width: action.payload as number };
    case ITEM_CONST.height:
      return { ...state, height: action.payload as number };
    case ITEM_CONST.weight:
      return { ...state, weight: action.payload as number };
    case ITEM_CONST.category:
      return { ...state, category: action.payload as string };
    case ITEM_CONST.discontinued:
      return { ...state, discontinued: action.payload as boolean };
    case ITEM_CONST.id:
      return { ...state, id: action.payload as string };
    case ITEM_CONST.setState:
      return { ...action.payload as Item };
    default:
      return state;
  }
};