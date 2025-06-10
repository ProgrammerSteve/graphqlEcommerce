import React from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../../components/itemCard/ItemCard";
import { useGetItemById } from "../../../utils/hooks/useGetItemById";
import { handlers } from "../../../utils/itemReducer/itemActions";
import { useNavigate } from "react-router-dom";
import EditItemHeader from "../../components/itemCard/EditItemHeader";
import { ItemCardProps } from "../../types";

const EditItemCard: React.FC<ItemCardProps> = ({ toggleSideMenu, showSideMenu }) => {
  const { itemId } = useParams<{ itemId: string }>();
  const { loading, itemState, dispatch } = useGetItemById(itemId);
  const navigate = useNavigate();
  
  const handler = () => {
    if (showSideMenu) toggleSideMenu();
    navigate("/");
  };

  return (
    <div className="p-2 rounded-xl bg-gray-300 shadow-lg box-content  overflow-y-scroll scrollbar-hide  flex flex-col gap-4 grow ">
      <EditItemHeader handler={handler} />
      {!loading && itemState && (
        <ItemCard itemState={itemState} handlers={handlers(dispatch)} />
      )}
    </div>
  );
};

export default EditItemCard;