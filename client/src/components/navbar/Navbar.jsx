import React from "react";
import {
  PriceSort,
  AlphabetizeSort,
  PriceFilter,
  AddItemButton,
  TextFilter,
  HamburgerMenu,
} from "../navBarComponents";

const NavTitle = () => {
  return (
    <div>
      <h1 className="text-sm xxs:text-base  xs:text-lg sm:text-xl md:text-2xl font-semibold text-white">
        Ecommerce CMS
      </h1>
    </div>
  );
};

const Navbar = ({
  textSearch,
  handleTextSearch,
  minPrice,
  handleMinPrice,
  maxPrice,
  handleMaxPrice,
  toggleNewItem,
  toggleSideMenu,
  handleSortOption,
  sortOption,
  showSideMenu,
}) => {
  return (
    <div className="h-32 bg-gray-800 shadow-lg p-8 flex items-center justify-between rounded-lg">
      <NavTitle />

      <div className="hidden sm:flex gap-4 ">
        <AlphabetizeSort
          handleSortOption={handleSortOption}
          sortOption={sortOption}
        />
        <PriceSort
          handleSortOption={handleSortOption}
          sortOption={sortOption}
        />
        <AddItemButton toggleNewItem={toggleNewItem} />
        <TextFilter text={textSearch} handleText={handleTextSearch} />
        <PriceFilter
          min={minPrice}
          max={maxPrice}
          handleMin={handleMinPrice}
          handleMax={handleMaxPrice}
        />
      </div>
      <HamburgerMenu
        toggleSideMenu={toggleSideMenu}
        showSideMenu={showSideMenu}
      />
    </div>
  );
};

export default Navbar;
