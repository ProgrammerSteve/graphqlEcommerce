import React, { useState } from "react";
import EditSvg from "../editSvg/EditSvg.jsx";
import ConfirmSvg from "../confirmSvg/ConfirmSvg.jsx";

const TextAreaInput = ({
  title,
  value,
  handler,
  itemState,
  newItem = false,
}) => {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
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
            readOnly="readonly"
            unselectable="on"
          />
        )}
      </div>
    </div>
  );
};

export default TextAreaInput;

const HeaderComponent = ({
  title,
  active,
  toggleActive,
  itemState,
  newItem = false,
}) => {
  return (
    <>
      <div className="bg-gray-800 h-[100%] grid place-items-center rounded-tl-lg rounded-bl-lg">
        <label>{title}</label>
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
