import React from "react";
import ItemCard from "../itemCard/ItemCard.jsx";
import { processedData } from "../../../utils/filterSorting";

const ItemDisplay = ({
  loading,
  error,
  data,
  sortOption,
  textSearch,
  minPrice,
  maxPrice,
}) => {
  return (
    <div className="grow w-full overflow-y-scroll scrollbar-hide flex flex-col gap-4">
      {!loading &&
        !error &&
        data &&
        processedData(data, sortOption, textSearch, minPrice, maxPrice).map(
          (item) => <ItemCard item={item} key={item.id} />
        )}
    </div>
  );
};

export default ItemDisplay;
