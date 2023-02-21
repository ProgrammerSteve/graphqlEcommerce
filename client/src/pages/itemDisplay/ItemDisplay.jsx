import React from "react";
import ItemPreview from "../../components/itemPreview/ItemPreview.jsx";
import { processedData } from "../../../utils/filterSorting";
import { useNavigate } from "react-router-dom";

const ItemDisplay = ({
  loading,
  error,
  data,
  sortOption,
  textSearch,
  minPrice,
  maxPrice,
  showSideMenu,
  toggleSideMenu,
}) => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    if (showSideMenu) toggleSideMenu();
    navigate(path);
  };
  return (
    <div className="box-content w-full grow overflow-y-scroll scrollbar-hide grid grid-cols-1 sm:grid-cols-2 justify-center gap-3 sm:gap-2 md:gap-4">
      {!loading &&
        !error &&
        data &&
        processedData(data, sortOption, textSearch, minPrice, maxPrice).map(
          (item) => (
            <ItemPreview
              item={item}
              key={item.id}
              handleNavigate={handleNavigate}
            />
          )
        )}
    </div>
  );
};

export default ItemDisplay;
