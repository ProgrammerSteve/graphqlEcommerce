import React, { useEffect } from "react";
import ItemCard from "../../components/itemCard/ItemCard.jsx";
import ItemPreview from "../../components/itemPreview/ItemPreview.jsx";
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
  useEffect(() => {
    console.log("Item display page");
  }, []);
  return (
    <div className="box-content grow overflow-y-scroll scrollbar-hide grid grid-cols-1 sm:grid-cols-2 justify-center gap-3 sm:gap-2 md:gap-4">
      {!loading &&
        !error &&
        data &&
        processedData(data, sortOption, textSearch, minPrice, maxPrice).map(
          (item) => <ItemPreview item={item} key={item.id} />
        )}
    </div>
  );
};

export default ItemDisplay;
