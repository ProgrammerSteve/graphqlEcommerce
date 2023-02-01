import React, { useEffect, useState } from "react";
import "./app.css";
import ItemContainer from "./components/itemContainer/ItemContainer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import { useQuery } from "@apollo/client";
import NewItemCard from "./components/newItemCard/NewItemCard.jsx";
import ItemDisplay from "./components/itemDisplay/ItemDisplay.jsx";
import { SORT_OPTIONS } from "../utils/filterSorting";
import { GET_ITEMS } from "../utils/gqlQueries/queries";
import SideMenu from "./components/sideMenu/SideMenu.jsx";

const PAGES = {
  SIDE_MENU: "SIDE_MENU",
  ITEMS_DISPLAY: "ITEMS_DISPLAY",
  NEW_ITEM: "NEW_ITEM",
};

const App = () => {
  const { loading, error, data } = useQuery(GET_ITEMS);
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
        toggleSideMenu={toggleSideMenu}
        sortOption={sortOption}
        handleSortOption={handleSortOption}
      />
    );
    return component[prop];
  };

  return (
    <ItemContainer>
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
      {PageComponent(page)}
    </ItemContainer>
  );
};

export default App;
