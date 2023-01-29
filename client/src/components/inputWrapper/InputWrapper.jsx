import React, { useState } from "react";
import EditSvg from "../editSvg/EditSvg.jsx";
import ConfirmSvg from "../confirmSvg/ConfirmSvg.jsx";

const InputWrapper = ({ children, ...props }) => {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };

  const { wrapperTitle, wrapperValue, itemState } = props;
  return (
    <div className="bg-gray-800 text-gray-100 h-12 flex flex-grow w-full rounded-lg">
      <div className="h-full w-28 bg-gray-800 grid place-items-center px-4 rounded-tl-lg rounded-bl-lg">
        <label className="text-sm">{wrapperTitle}</label>
      </div>

      <div className="grow h-full bg-gray-500">
        {active ? (
          children
        ) : (
          <div className="grid items-center h-full w-full pl-2 text-sm">
            {wrapperValue}
          </div>
        )}
      </div>

      <div className="bg-gray-800 h-full rounded-tr-lg rounded-br-lg cursor-pointer grid place-items-center">
        {active ? (
          <ConfirmSvg itemState={itemState} toggleActive={toggleActive} />
        ) : (
          <EditSvg toggleActive={toggleActive} />
        )}
      </div>
    </div>
  );
};

export default InputWrapper;
