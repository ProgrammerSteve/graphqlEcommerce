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
  handleNavigationNewItem,
}) => {
  return (
    <div className="h-[100vh]  w-min-[280px] w-1/2 z-50 absolute right-0 box-context   md:hidden   bg-gray-900">
      <div className="grid grid-cols-1 justify-center gap-4 h-1/2">
        <CloseSvg toggleSideMenu={toggleSideMenu} />
        <TextFilter text={textSearch} handleText={handleTextSearch} />
        <AlphabetizeSort
          handleSortOption={handleSortOption}
          sortOption={sortOption}
        />
        <PriceSort
          handleSortOption={handleSortOption}
          sortOption={sortOption}
        />
        <AddItemButton handleNavigationNewItem={handleNavigationNewItem} />
        <PriceFilter
          min={minPrice}
          max={maxPrice}
          handleMin={handleMinPrice}
          handleMax={handleMaxPrice}
        />
      </div>
    </div>
  );
};

export default SideMenu;
