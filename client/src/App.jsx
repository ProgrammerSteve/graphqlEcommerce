import React, { useEffect } from "react";
import "./app.css";
import ItemCard from "./components/itemCard/ItemCard.jsx";
import ItemContainer from "./components/itemContainer/ItemContainer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import { useQuery, gql } from "@apollo/client";

const App = () => {
  const GET_ITEMS = gql`
    query GetItems {
      items {
        id
        name
        src
        price
        alt
        stock
        description
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_ITEMS);

  useEffect(() => {
    console.log("data:", data);
  }, [data]);

  return (
    <ItemContainer>
      <Navbar />
      <div className="grow w-full overflow-y-scroll scrollbar-hide flex flex-col gap-4">
        {!loading &&
          !error &&
          data.items.map((item) => <ItemCard item={item} key={item.id} />)}
      </div>
    </ItemContainer>
  );
};

export default App;
