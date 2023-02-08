import React from "react";
import { useUpdateItem } from "../../../utils/hooks/useUpdateItem.js";

const ConfirmSvg = ({ itemState, toggleActive, newItem }) => {
  const [handleUpdate] = useUpdateItem(itemState);

  const handler = async (newItem) => {
    if (!newItem) await handleUpdate();
    toggleActive();
  };

  return (
    <div
      className="bg-gray-800 h-full w-[48px] rounded-tr-lg rounded-br-lg cursor-pointer grid place-items-center"
      onClick={handler.bind(this, newItem)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className={"w-4 fill-white"}
      >
        <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
      </svg>
    </div>
  );
};

export default ConfirmSvg;
