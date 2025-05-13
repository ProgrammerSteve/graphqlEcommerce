import React, { useState } from "react";
import { EditSvg, ConfirmSvg } from "../svgComponents";
import { Item } from "../../types";

interface TextAreaInputProps {
  title: string;
  value: string;
  handler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  itemState: Item;
  newItem?: boolean;
}

const TextAreaInput: React.FC<TextAreaInputProps> = ({
  title,
  value,
  handler,
  itemState,
  newItem = false,
}) => {
  const [active, setActive] = useState<boolean>(false);
  const toggleActive = (): void => {
    setActive(!active);
  };
  return (
    <div className="h-full flex flex-col flex-grow">
      <div className="bg-gray-800 text-gray-100 px-2 h-[32px] flex justify-between items-center rounded-t-lg">
        <HeaderComponent
          title={title}
          active={active}
          toggleActive={toggleActive}
          itemState={itemState}
          newItem={newItem}
        />
      </div>
      <div className="grow">
        {active ? (
          <textarea
            className="textarea px-2"
            onChange={handler}
            value={value}
          />
        ) : (
          <textarea
            className="textareadiv select-none px-2"
            defaultValue={value}
            spellCheck="false"
            readOnly
            unselectable="on"
          />
        )}
      </div>
    </div>
  );
};

export default TextAreaInput;

interface HeaderComponentProps {
  title: string;
  active: boolean;
  toggleActive: () => void;
  itemState: Item;
  newItem?: boolean;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  title,
  active,
  toggleActive,
  itemState,
  newItem = false,
}) => {
  return (
    <>
      <div className="bg-gray-800 h-[100%] grid place-items-center rounded-tl-lg rounded-bl-lg">
        <label className="select-none text-sm">{title}</label>
      </div>

      {active ? (
        <ConfirmSvg
          itemState={itemState}
          toggleActive={toggleActive}
          newItem={newItem}
        />
      ) : (
        <EditSvg toggleActive={toggleActive} />
      )}
    </>
  );
};