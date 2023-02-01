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
    <div className="grow w-full overflow-y-scroll scrollbar-hide flex flex-col gap-4 bg-gray-900">
      Side Menu
    </div>
  );
};

export default SideMenu;
