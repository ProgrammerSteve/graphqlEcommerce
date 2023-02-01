import React, { useEffect, useState } from "react";
import "./app.css";
import ItemCard from "./components/itemCard/ItemCard.jsx";

import ItemContainer from "./components/itemContainer/ItemContainer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import { useQuery, gql } from "@apollo/client";
import NewItemCard from "./components/newItemCard/NewItemCard.jsx";
import { SORT_OPTIONS, processedData } from "../utils/filterSorting";

import { GET_ITEMS } from "../utils/gqlQueries/queries";

const App = () => {
  const { loading, error, data } = useQuery(GET_ITEMS);

  const [textSearch, setTextSearch] = useState("");
  const handleTextSearch = (e) => {
    setTextSearch(e.target.value);
  };
  const [minPrice, setMinPrice] = useState(0);
  const handleMinPrice = (e) => {
    setMinPrice(Number(e.target.value));
  };
  const [maxPrice, setMaxPrice] = useState(0);
  const handleMaxPrice = (e) => {
    setMaxPrice(Number(e.target.value));
  };

  const [showNewItem, setShowNewItem] = useState(false);
  const toggleNewItem = () => {
    setShowNewItem(!showNewItem);
  };
  const [sortOption, setSortOption] = useState(
    SORT_OPTIONS.ALPHABETICALLY_ACCENDING
  );

  const handleSortOption = (value) => {
    setSortOption(value);
  };

  useEffect(() => {
    console.log("data:", data);
  }, [data]);

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
        sortOption={sortOption}
        handleSortOption={handleSortOption}
      />

      {showNewItem ? (
        <NewItemCard toggleNewItem={toggleNewItem} />
      ) : (
        <div className="grow w-full overflow-y-scroll scrollbar-hide flex flex-col gap-4">
          {!loading &&
            !error &&
            data &&
            processedData(data, sortOption, textSearch, minPrice, maxPrice).map(
              (item) => <ItemCard item={item} key={item.id} />
            )}
        </div>
      )}
    </ItemContainer>
  );
};

export default App;
