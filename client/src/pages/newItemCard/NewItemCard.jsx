import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateItem } from "../../../utils/hooks/useCreateItem.js";
import ItemCard from "../../components/itemCard/ItemCard.jsx";
import NewItemHeader from "../../components/itemCard/NewItemHeader.jsx";
import { useGetNewItem } from "../../../utils/hooks/useGetNewItem.js";
import { handlers } from "../../../utils/itemReducer/itemActions.js";

const NewItemCard = () => {
  const { itemState, dispatch } = useGetNewItem();
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
      <ItemCard
        itemState={itemState}
        handlers={handlers(dispatch)}
        newItem={true}
      />
    </div>
  );
};

export default NewItemCard;
