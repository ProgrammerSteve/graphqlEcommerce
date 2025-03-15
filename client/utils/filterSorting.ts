import { Item, GetItemsData } from "../src/types";

export const SORT_OPTIONS = {
  ALPHABETICALLY_ACCENDING: "ALPHABETICALLY_ACCENDING",
  ALPHABETICALLY_DECENDING: "ALPHABETICALLY_DECENDING",
  PRICE_ACCENDING: "PRICE_ACCENDING",
  PRICE_DECENDING: "PRICE_DECENDING",
} as const;

type SortOption = typeof SORT_OPTIONS[keyof typeof SORT_OPTIONS];

const sortAlphabeticallyAccending = (a: Item, b: Item): number => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  return nameA < nameB ? -1 : 1;
};

const sortAlphabeticallyDecending = (a: Item, b: Item): number => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  return nameA > nameB ? -1 : 1;
};

const sortPriceAccending = (a: Item, b: Item): number => {
  return a.price < b.price ? -1 : 1;
};

const sortPriceDecending = (a: Item, b: Item): number => {
  return a.price > b.price ? -1 : 1;
};

export const sortedData = (
  data: GetItemsData | undefined,
  sortOption: string = SORT_OPTIONS.ALPHABETICALLY_ACCENDING
): Item[] => {
  try {
    if (!data || !data.items) return [];

    const items = [...data.items];
    
    switch (sortOption) {
      case SORT_OPTIONS.ALPHABETICALLY_ACCENDING:
        return items.sort(sortAlphabeticallyAccending);
      case SORT_OPTIONS.ALPHABETICALLY_DECENDING:
        return items.sort(sortAlphabeticallyDecending);
      case SORT_OPTIONS.PRICE_ACCENDING:
        return items.sort(sortPriceAccending);
      case SORT_OPTIONS.PRICE_DECENDING:
        return items.sort(sortPriceDecending);
      default:
        return items.sort(sortAlphabeticallyAccending);
    }
  } catch (err) {
    console.log("data:", data);
    console.log("error:", err);
    return [];
  }
};

export const searchTextInItems = (items: Item[], textSearch: string): Item[] => {
  return items.filter((item) => {
    if (textSearch !== "") {
      const name = item.name;
      return name.toLowerCase().includes(textSearch.toLowerCase());
    }
    return true;
  });
};

export const searchPriceInItems = (
  items: Item[],
  minPrice: number,
  maxPrice: number
): Item[] => {
  return items.filter((item) => {
    const upperBool = maxPrice !== 0 ? item.price <= maxPrice : true;
    const lowerBool = item.price >= minPrice;
    return lowerBool && upperBool;
  });
};

export const processedData = (
  data: GetItemsData | undefined,
  sortOption: string,
  textSearch: string,
  minPrice: number,
  maxPrice: number
): Item[] => {
  return searchPriceInItems(
    searchTextInItems(sortedData(data, sortOption), textSearch),
    minPrice,
    maxPrice
  );
};