import React from "react";
import InputWrapper from "./InputWrapper.jsx";

const PriceInput = ({
  title,
  price,
  handlePrice,
  itemState,
  newItem = false,
}) => {
  let priceString = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <InputWrapper
      wrapperTitle={title}
      wrapperValue={priceString}
      itemState={itemState}
      newItem={newItem}
    >
      <input
        type="number"
        value={price}
        min="0"
        step="0.01"
        onChange={handlePrice}
        className="w-full h-full text-black pl-2 text-sm"
      />
    </InputWrapper>
  );
};

export default PriceInput;
