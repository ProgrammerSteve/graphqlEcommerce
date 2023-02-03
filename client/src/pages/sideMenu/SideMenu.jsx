import React from "react";
import {
  PriceSort,
  AlphabetizeSort,
  PriceFilter,
  AddItemButton,
  TextFilter,
  HamburgerMenu,
} from "../../components/navBarComponents";

const SideMenu = ({
  textSearch,
  handleTextSearch,
  minPrice,
  handleMinPrice,
  maxPrice,
  handleMaxPrice,
  toggleNewItem,
  handleSortOption,
  sortOption,
}) => {
  return (
    <div className="grow  box-context items-start justify-center grid grid-cols-1 sm:hidden  gap-4 bg-gray-900">
      <TextFilter text={textSearch} handleText={handleTextSearch} />

      <AlphabetizeSort
        handleSortOption={handleSortOption}
        sortOption={sortOption}
      />
      <PriceSort handleSortOption={handleSortOption} sortOption={sortOption} />
      <AddItemButton toggleNewItem={toggleNewItem} />

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
