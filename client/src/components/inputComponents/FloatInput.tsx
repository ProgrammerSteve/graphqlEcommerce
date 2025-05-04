import React from "react";
import InputWrapper from "./InputWrapper";
import { Item } from "../../types";

interface FloatInputProps {
  title: string;
  value: number;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  itemState: Item;
  newItem?: boolean;
}

const FloatInput: React.FC<FloatInputProps> = ({ title, value, handler, itemState, newItem = false }) => {
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
        step="0.01"
        onChange={handler}
        className="w-full h-full text-black pl-2 text-sm"
      />
    </InputWrapper>
  );
};

export default FloatInput;