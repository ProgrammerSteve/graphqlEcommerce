import React from "react";
import "./app.css";
import ItemCard from "./components/itemCard/ItemCard.jsx";
import ItemContainer from "./components/itemContainer/ItemContainer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";

const App = () => {
  return (
    <ItemContainer>
      <Navbar />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </ItemContainer>
  );
};

export default App;
