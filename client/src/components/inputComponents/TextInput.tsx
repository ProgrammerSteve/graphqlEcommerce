import React from "react";
import InputWrapper from "./InputWrapper";
import { Item } from "../../types";

interface TextInputProps {
  title: string;
  value: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  itemState: Item;
  newItem?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ title, value, handler, itemState, newItem = false }) => {
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