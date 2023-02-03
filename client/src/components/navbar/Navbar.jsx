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
      <h1 className="h-[100px] grid place-items-center text-sm xxs:text-base  xs:text-lg sm:text-xl md:text-2xl font-semibold text-white">
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
    <div className="box-content h-[120px] bg-gray-800 shadow-lg px-8 sm:py-[32px] flex items-center justify-between rounded-none sm:rounded-lg ">
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
