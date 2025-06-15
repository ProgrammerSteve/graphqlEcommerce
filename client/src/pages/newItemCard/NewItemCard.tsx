import React from "react";
import { useNavigate } from "react-router-dom";
import { useCreateItem } from "../../../utils/hooks/useCreateItem";
import ItemCard from "../../components/itemCard/ItemCard";
import NewItemHeader from "../../components/itemCard/NewItemHeader";
import { useGetNewItem } from "../../../utils/hooks/useGetNewItem";
import { handlers } from "../../../utils/itemReducer/itemActions";
import { ItemCardProps } from "../../types";

const NewItemCard: React.FC<ItemCardProps> = ({ toggleSideMenu, showSideMenu }) => {
  const { itemState, dispatch } = useGetNewItem();
  const [handleAddNewItem] = useCreateItem(itemState);
  const navigate = useNavigate();
  
  const handler = async () => {
    try {
      await handleAddNewItem();
      if (showSideMenu) toggleSideMenu();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleNavigateToHome = () => {
    if (showSideMenu) toggleSideMenu();
    navigate("/");
  };

  return (
    <div className="p-2 rounded-xl bg-gray-300 shadow-lg box-content  overflow-y-scroll scrollbar-hide  flex flex-col gap-4  grow    ">
      <NewItemHeader
        handler={handler}
        handleNavigateToHome={handleNavigateToHome}
      />
      <ItemCard
        itemState={itemState}
        handlers={handlers(dispatch)}
        newItem={true}
      />
    </div>
  );
};

export default NewItemCard;