import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateItem } from "../../../utils/hooks/useCreateItem.js";
import ItemCard from "../../components/itemCard/ItemCard.jsx";
import NewItemHeader from "../../components/itemCard/NewItemHeader.jsx";

const NewItemCard = () => {
  const [itemState, setItem] = useState({
    id: "",
    name: "",
    src: "",
    alt: "",
    stock: 0,
    price: 0.0,
    description: "",
    length: 0.0,
    width: 0.0,
    height: 0.0,
    weight: 0.0,
    category: "",
    discontinued: false,
  });

  const [handleAddNewItem] = useCreateItem(itemState);
  const navigate = useNavigate();
  const handler = async () => {
    try {
      await handleAddNewItem();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-2 rounded-xl bg-gray-300 shadow-lg box-content grow flex flex-col gap-4">
      <NewItemHeader handler={handler} />
      <ItemCard item={itemState} newItem={true} />
    </div>
  );
};

export default NewItemCard;
