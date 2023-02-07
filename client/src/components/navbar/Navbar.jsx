import React from "react";
import {
  PriceSort,
  AlphabetizeSort,
  PriceFilter,
  AddItemButton,
  TextFilter,
  HamburgerMenu,
} from "../navBarComponents";

import { Link } from "react-router-dom";

const NavTitle = () => {
  return (
    <Link to="/">
      <h1 className="h-[100px] w-[200px] md:w-[100px] mdlg:w-[130px] lg:w-[160px] 2xl:w-[200px] grid place-items-center text-xl md:text-lg mdlg:text-xl lg:text-2xl xl:text-3xl font-semibold text-white">
        Ecommerce CMS
      </h1>
    </Link>
  );
};

const Navbar = ({
  textSearch,
  handleTextSearch,
  minPrice,
  handleMinPrice,
  maxPrice,
  handleMaxPrice,
  toggleSideMenu,
  handleSortOption,
  sortOption,
  showSideMenu,
}) => {
  return (
    <div className="box-content h-[120px] bg-gray-800 shadow-lg px-8 md:px-2 mdlg:px-4 lg:px-6 xl:px-8 sm:py-[32px] flex items-center justify-between rounded-none sm:rounded-lg ">
      <NavTitle />

      <div className="hidden md:flex gap-2 mdlg:gap-3 lg:gap-4 ">
        <AlphabetizeSort
          handleSortOption={handleSortOption}
          sortOption={sortOption}
        />
        <PriceSort
          handleSortOption={handleSortOption}
          sortOption={sortOption}
        />
        <AddItemButton />
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
