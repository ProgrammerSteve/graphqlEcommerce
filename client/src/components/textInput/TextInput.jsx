import React from "react";
import InputWrapper from "../inputWrapper/InputWrapper.jsx";

const TextInput = ({ title, value, handler }) => {
  return (
    <InputWrapper wrapperTitle={title} wrapperValue={value}>
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
