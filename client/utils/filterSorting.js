export const SORT_OPTIONS = {
  ALPHABETICALLY_ACCENDING: "ALPHABETICALLY_ACCENDING",
  ALPHABETICALLY_DECENDING: "ALPHABETICALLY_DECENDING",
  PRICE_ACCENDING: "PRICE_ACCENDING",
  PRICE_DECENDING: "PRICE_DECENDING",
};

const sortAlphabeticallyAccending = (a, b) => {
  if (!("name" in a) || !("name" in b))
    throw new Error("missing name property");
  let nameA = a.name.toUpperCase();
  let nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  } else {
    return 1;
  }
};
const sortAlphabeticallyDecending = (a, b) => {
  if (!("name" in a) || !("name" in b))
    throw new Error("missing name property");
  let nameA = a.name.toUpperCase();
  let nameB = b.name.toUpperCase();
  if (nameA > nameB) {
    return -1;
  } else {
    return 1;
  }
};
const sortPriceAccending = (a, b) => {
  if (!("price" in a) || !("price" in b))
    throw new Error("missing price property");
  let priceA = a.price;
  let priceB = b.price;
  if (priceA < priceB) {
    return -1;
  } else {
    return 1;
  }
};
const sortPriceDecending = (a, b) => {
  if (!("price" in a) || !("price" in b))
    throw new Error("missing price property");
  let priceA = a.price;
  let priceB = b.price;
  if (priceA > priceB) {
    return -1;
  } else {
    return 1;
  }
};

export const sortedData = (
  data,
  sortOption = SORT_OPTIONS.ALPHABETICALLY_ACCENDING
) => {
  try {
    if (!data) return [];
    if (!("items" in data)) return [];

    let items = [...data.items];
    if (sortOption === SORT_OPTIONS.ALPHABETICALLY_ACCENDING)
      return items.sort(sortAlphabeticallyAccending);
    if (sortOption === SORT_OPTIONS.ALPHABETICALLY_DECENDING)
      return items.sort(sortAlphabeticallyDecending);
    if (sortOption === SORT_OPTIONS.PRICE_ACCENDING)
      return items.sort(sortPriceAccending);
    if (sortOption === SORT_OPTIONS.PRICE_DECENDING)
      return items.sort(sortPriceDecending);
    return [];
  } catch (err) {
    console.log("data:", data);
    console.log("error:", err);
  }
};

export const searchTextInItems = (items, textSearch) => {
  return items.filter((item) => {
    if (textSearch !== "") {
      let name = `${item.name}`;
      return name.toLowerCase().includes(textSearch.toLowerCase());
    } else {
      return true;
    }
  });
};
export const searchPriceInItems = (items, minPrice, maxPrice) => {
  return items.filter((item) => {
    let [upperBool, lowerBool] = [true, true];
    if (maxPrice !== 0) upperBool = Number(item.price) <= maxPrice;
    lowerBool = Number(item.price) >= minPrice;
    return lowerBool && upperBool;
  });
};

export const processedData = (
  data,
  sortOption,
  textSearch,
  minPrice,
  maxPrice
) => {
  return searchPriceInItems(
    searchTextInItems(sortedData(data, sortOption), textSearch),
    minPrice,
    maxPrice
  );
};
