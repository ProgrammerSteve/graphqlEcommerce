import React from "react";
import {
  PriceSort,
  AlphabetizeSort,
  PriceFilter,
  AddItemButton,
  TextFilter,
} from "../../components/navBarComponents";

const SideMenu = ({
  textSearch,
  handleTextSearch,
  minPrice,
  handleMinPrice,
  maxPrice,
  handleMaxPrice,
  handleSortOption,
  sortOption,
}) => {
  return (
    <div className="grow  box-context items-start justify-center grid grid-cols-1 md:hidden  gap-1 bg-gray-900">
      <TextFilter text={textSearch} handleText={handleTextSearch} />

      <AlphabetizeSort
        handleSortOption={handleSortOption}
        sortOption={sortOption}
      />
      <PriceSort handleSortOption={handleSortOption} sortOption={sortOption} />
      <AddItemButton />

      <PriceFilter
        min={minPrice}
        max={maxPrice}
        handleMin={handleMinPrice}
        handleMax={handleMaxPrice}
      />
    </div>
  );
};

export default SideMenu;
