import React from "react";
import InputWrapper from "./InputWrapper";
import { Item } from "../../types";

interface IntegerInputProps {
  title: string;
  value: number;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  itemState: Item;
  newItem?: boolean;
}

const IntegerInput: React.FC<IntegerInputProps> = ({
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