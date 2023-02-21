import React, { useState, useEffect } from "react";
import { SORT_OPTIONS } from "../utils/filterSorting";
import { useGetData } from "../utils/hooks/useGetData";
import { Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./containers/navbar/Navbar.jsx";
import NewItemCard from "./pages/newItemCard/NewItemCard.jsx";
import ItemDisplay from "./pages/itemDisplay/ItemDisplay.jsx";
import SideMenu from "./containers/sideMenu/SideMenu.jsx";
import EditItemCard from "./pages/editItemCard/EditItemCard.jsx";
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
    setShowSideMenu(!showSideMenu);
  };
  useEffect(() => {
    console.log("showSideMenu:", showSideMenu);
  }, [showSideMenu]);

  const navigate = useNavigate();
  const handleNavigationNewItem = () => {
    if (showSideMenu) toggleSideMenu();
    navigate("/newitem");
  };

  return (
    <>
      {showSideMenu && (
        <SideMenu
          toggleSideMenu={toggleSideMenu}
          textSearch={textSearch}
          handleTextSearch={handleTextSearch}
          minPrice={minPrice}
          handleMinPrice={handleMinPrice}
          maxPrice={maxPrice}
          handleMaxPrice={handleMaxPrice}
          handleSortOption={handleSortOption}
          sortOption={sortOption}
          handleNavigationNewItem={handleNavigationNewItem}
        />
      )}
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
              <ItemDisplay
                showSideMenu={showSideMenu}
                toggleSideMenu={toggleSideMenu}
                loading={loading}
                error={error}
                data={data}
                sortOption={sortOption}
                textSearch={textSearch}
                minPrice={minPrice}
                maxPrice={maxPrice}
              />
            }
          />
          <Route
            path="/item/:itemId"
            element={
              <EditItemCard
                showSideMenu={showSideMenu}
                toggleSideMenu={toggleSideMenu}
              />
            }
          />
          <Route
            path="/newitem"
            element={
              <NewItemCard
                showSideMenu={showSideMenu}
                toggleSideMenu={toggleSideMenu}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
