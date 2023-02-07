import React, { useState } from "react";
import { SORT_OPTIONS } from "../utils/filterSorting";
import { useGetData } from "../utils/hooks/useGetData";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar.jsx";
import NewItemCard from "./pages/newItemCard/NewItemCard.jsx";
import ItemDisplay from "./pages/itemDisplay/ItemDisplay.jsx";
import SideMenu from "./pages/sideMenu/SideMenu.jsx";
import "./app.css";

const App = () => {
  const { loading, error, data } = useGetData();
  const [textSearch, setTextSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [sortOption, setSortOption] = useState(
    SORT_OPTIONS.ALPHABETICALLY_ACCENDING
  );
  const handleTextSearch = (e) => {
    setTextSearch(e.target.value);
  };
  const handleMinPrice = (e) => {
    setMinPrice(Number(e.target.value));
  };
  const handleMaxPrice = (e) => {
    setMaxPrice(Number(e.target.value));
  };
  const handleSortOption = (value) => {
    setSortOption(value);
  };

  const toggleSideMenu = () => {
    console.log("showSideMenu toggled");
    setShowSideMenu(!showSideMenu);
  };

  const AppendSideMenu = ({ showSideMenu, children }) => {
    return showSideMenu ? (
      <SideMenu
        textSearch={textSearch}
        handleTextSearch={handleTextSearch}
        minPrice={minPrice}
        handleMinPrice={handleMinPrice}
        maxPrice={maxPrice}
        handleMaxPrice={handleMaxPrice}
        handleSortOption={handleSortOption}
        sortOption={sortOption}
      />
    ) : (
      children
    );
  };

  return (
    <div className="h-screen bg-gray-600 shadow-lg p-0 sm:p-6 md:p-4 mdlg:p-6 lg:p-8 scrollbar-hide flex flex-grow flex-col gap-0 sm:gap-1">
      <Navbar
        textSearch={textSearch}
        handleTextSearch={handleTextSearch}
        minPrice={minPrice}
        handleMinPrice={handleMinPrice}
        maxPrice={maxPrice}
        handleMaxPrice={handleMaxPrice}
        toggleSideMenu={toggleSideMenu}
        showSideMenu={showSideMenu}
        sortOption={sortOption}
        handleSortOption={handleSortOption}
      />
      <Routes>
        <Route
          index
          path="/"
          element={
            <AppendSideMenu showSideMenu={showSideMenu}>
              <ItemDisplay
                loading={loading}
                error={error}
                data={data}
                sortOption={sortOption}
                textSearch={textSearch}
                minPrice={minPrice}
                maxPrice={maxPrice}
              />
            </AppendSideMenu>
          }
        />
        <Route
          path="/item/:itemid"
          element={
            <AppendSideMenu showSideMenu={showSideMenu}>
              <NewItemCard />
            </AppendSideMenu>
          }
        />
        <Route
          path="/newitem"
          element={
            <AppendSideMenu showSideMenu={showSideMenu}>
              <NewItemCard />
            </AppendSideMenu>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
