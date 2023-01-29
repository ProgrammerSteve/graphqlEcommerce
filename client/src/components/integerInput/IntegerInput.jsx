import React from "react";
import InputWrapper from "../inputWrapper/InputWrapper.jsx";

const IntegerInput = ({
  title,
  value,
  handler,
  itemState,
  newItem = false,
}) => {
  return (
    <InputWrapper
      wrapperTitle={title}
      wrapperValue={value}
      itemState={itemState}
      newItem={newItem}
    >
      <input
        type="number"
        value={value}
        min="0"
        step="1"
        onChange={handler}
        className="w-full h-full text-black pl-2 text-sm"
      />
    </InputWrapper>
  );
};

export default IntegerInput;
