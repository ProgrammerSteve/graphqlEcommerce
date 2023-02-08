import React from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../../components/itemCard/ItemCard.jsx";
import { useGetItemById } from "../../../utils/hooks/useGetItemById.js";

const EditItemCard = () => {
  const { itemId } = useParams();
  const { loading, itemState, dispatch } = useGetItemById(itemId);
  return (
    <div className="p-2 rounded-xl bg-gray-300 shadow-lg box-content grow flex flex-col gap-4">
      {!loading && itemState && (
        <ItemCard item={itemState} dispatch={dispatch} />
      )}
    </div>
  );
};
export default EditItemCard;
