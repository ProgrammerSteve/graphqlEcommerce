import React from "react";
import { FloatInput } from "../inputComponents";

const ItemDimensions = ({
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
