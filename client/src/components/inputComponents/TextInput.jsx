import React from "react";
import InputWrapper from "./InputWrapper.jsx";

const TextInput = ({ title, value, handler, itemState, newItem = false }) => {
  return (
    <InputWrapper
      wrapperTitle={title}
      wrapperValue={value}
      itemState={itemState}
      newItem={newItem}
    >
      <input
        type="text"
        value={value}
        onChange={handler}
        className="w-full h-full text-black pl-2 text-sm"
      />
    </InputWrapper>
  );
};

export default TextInput;
