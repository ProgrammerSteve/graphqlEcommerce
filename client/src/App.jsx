import React, { useEffect, useState } from "react";
import { SORT_OPTIONS } from "../utils/filterSorting";
import { useGetData } from "../utils/hooks/useGetData";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar.jsx";
import NewItemCard from "./pages/newItemCard/NewItemCard.jsx";
import ItemDisplay from "./pages/itemDisplay/ItemDisplay.jsx";
import SideMenu from "./pages/sideMenu/SideMenu.jsx";
import "./app.css";

const PAGES = {
  SIDE_MENU: "SIDE_MENU",
  ITEMS_DISPLAY: "ITEMS_DISPLAY",
  NEW_ITEM: "NEW_ITEM",
};

const App = () => {
  const { loading, error, data } = useGetData();
  const [textSearch, setTextSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [showNewItem, setShowNewItem] = useState(false);
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

  const [page, setPage] = useState(PAGES.ITEMS_DISPLAY);
  const toggleNewItem = () => {
    setShowNewItem(!showNewItem);
  };
  const toggleSideMenu = () => {
    console.log("showSideMenu toggled");
    setShowSideMenu(!showSideMenu);
  };

  useEffect(() => {
    const updatePage = () => {
      if (showSideMenu) {
        setPage(PAGES.SIDE_MENU);
        return;
      }
      if (showNewItem) {
        setPage(PAGES.NEW_ITEM);
      } else {
        setPage(PAGES.ITEMS_DISPLAY);
      }
    };
    updatePage();
  }, [showNewItem, showSideMenu]);

  const PageComponent = (prop) => {
    let component = {};
    component[PAGES.NEW_ITEM] = <NewItemCard toggleNewItem={toggleNewItem} />;
    component[PAGES.ITEMS_DISPLAY] = (
      <ItemDisplay
        loading={loading}
        error={error}
        data={data}
        sortOption={sortOption}
        textSearch={textSearch}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
    );
    component[PAGES.SIDE_MENU] = (
      <SideMenu
        textSearch={textSearch}
        handleTextSearch={handleTextSearch}
        minPrice={minPrice}
        handleMinPrice={handleMinPrice}
        maxPrice={maxPrice}
        handleMaxPrice={handleMaxPrice}
        toggleNewItem={toggleNewItem}
        sortOption={sortOption}
        handleSortOption={handleSortOption}
      />
    );
    return component[prop];
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
        toggleNewItem={toggleNewItem}
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
          path="/item/:itemid"
          element={<NewItemCard toggleNewItem={toggleNewItem} />}
        />
        <Route
          path="/newitem"
          element={<NewItemCard toggleNewItem={toggleNewItem} />}
        />
      </Routes>
    </div>
  );
};

export default App;
