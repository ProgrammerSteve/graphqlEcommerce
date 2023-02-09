import React from "react";
import {
  PriceSort,
  AlphabetizeSort,
  PriceFilter,
  AddItemButton,
  TextFilter,
} from "../../components/navBarComponents";

import { CloseSvg } from "../../components/svgComponents";

const SideMenu = ({
  textSearch,
  handleTextSearch,
  minPrice,
  handleMinPrice,
  maxPrice,
  handleMaxPrice,
  handleSortOption,
  sortOption,
  toggleSideMenu,
}) => {
  return (
    <div className="h-screen w-min-[280px] w-1/2 z-50 absolute right-0 box-context justify-center items-start grid grid-cols-1 md:hidden  gap-1 bg-gray-900">
      <CloseSvg toggleSideMenu={toggleSideMenu} />

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
