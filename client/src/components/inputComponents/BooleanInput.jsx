import React, { useState } from "react";
import { EditSvg, ConfirmSvg } from "../svgComponents";

const BooleanInput = ({
  title,
  value,
  itemState,
  newItem = false,
  handleTrue,
  handleFalse,
}) => {
  return (
    <InputWrapper
      wrapperTitle={title}
      wrapperValue={value}
      itemState={itemState}
      newItem={newItem}
    >
      <div className="w-full h-full py-1 px-2 grid grid-cols-2 gap-1 mx-auto">
        <div className=" flex flex-col items-center">
          <label>True</label>
          <input
            type="checkbox"
            onChange={handleTrue}
            checked={value}
            className="h-1/2 text-black pl-2 text-sm"
          />
        </div>

        <div className=" flex flex-col items-center">
          <label>False</label>
          <input
            type="checkbox"
            onChange={handleFalse}
            checked={!value}
            className="h-1/2 text-black pl-2 text-sm"
          />
        </div>
      </div>
    </InputWrapper>
  );
};

export default BooleanInput;

const InputWrapper = ({ children, ...props }) => {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };

  const { wrapperTitle, wrapperValue, itemState, newItem = false } = props;
  return (
    <div className="bg-gray-800 text-gray-100 h-12 flex flex-grow w-full rounded-lg">
      <div className="h-full w-14 sm:w-16 md:w-20 mdlg:w-24 lg:w-28 bg-gray-800 grid place-items-center px-2 mdlg:px-4  rounded-tl-lg rounded-bl-lg">
        <label className="text-xs md:text-sm select-none">{wrapperTitle}</label>
      </div>

      <div className="grow h-full bg-gray-500">
        {active ? (
          children
        ) : (
          <div className="grid items-center h-full w-full pl-2 text-sm">
            {wrapperValue ? "true" : "false"}
          </div>
        )}
      </div>

      <div className="bg-gray-800 h-full rounded-tr-lg rounded-br-lg cursor-pointer grid place-items-center">
        {active ? (
          <ConfirmSvg
            itemState={itemState}
            toggleActive={toggleActive}
            newItem={newItem}
          />
        ) : (
          <EditSvg toggleActive={toggleActive} />
        )}
      </div>
    </div>
  );
};
