import React from "react";
import { FloatInput } from "../inputComponents";
import { Item } from "../../types";

interface ItemDimensionsProps {
  itemState: Item;
  handleLength: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleHeight: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleWidth: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleWeight: (e: React.ChangeEvent<HTMLInputElement>) => void;
  newItem?: boolean;
}

const ItemDimensions: React.FC<ItemDimensionsProps> = ({
  itemState,
  handleLength,
  handleHeight,
  handleWidth,
  handleWeight,
  newItem = false,
}) => {
  return (
    <>
      <FloatInput
        title="Length [in]"
        value={itemState.length}
        handler={handleLength}
        itemState={itemState}
        newItem={newItem}
      />
      <FloatInput
        title="Width [in]"
        value={itemState.width}
        handler={handleWidth}
        itemState={itemState}
        newItem={newItem}
      />
      <FloatInput
        title="Height [in]"
        value={itemState.height}
        handler={handleHeight}
        itemState={itemState}
        newItem={newItem}
      />
      <FloatInput
        title="Weight [lbs]"
        value={itemState.weight}
        handler={handleWeight}
        itemState={itemState}
        newItem={newItem}
      />
    </>
  );
};

export default ItemDimensions;