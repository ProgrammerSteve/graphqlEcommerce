import React from "react";
import {
  PriceSort,
  AlphabetizeSort,
  PriceFilter,
  AddItemButton,
  TextFilter,
  HamburgerMenu,
  NavTitle,
} from "../../components/navBarComponents";

import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const handleNavigationHome = () => {
    if (showSideMenu) toggleSideMenu();
    navigate("/");
  };
  const handleNavigationNewItem = () => {
    if (showSideMenu) toggleSideMenu();
    navigate("/newitem");
  };
  return (
    <div className="box-content h-[120px] bg-gray-800 shadow-lg px-8 md:px-2 mdlg:px-4 lg:px-6 xl:px-8 sm:py-[32px] flex items-center justify-between rounded-none sm:rounded-lg ">
      <NavTitle handleNavigationHome={handleNavigationHome} />

      <div className="hidden md:flex gap-2 mdlg:gap-3 lg:gap-4 ">
        <AlphabetizeSort
          handleSortOption={handleSortOption}
          sortOption={sortOption}
        />
        <PriceSort
          handleSortOption={handleSortOption}
          sortOption={sortOption}
        />
        <AddItemButton handleNavigationNewItem={handleNavigationNewItem} />
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
