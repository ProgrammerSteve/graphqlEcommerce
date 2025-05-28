import React from "react";

interface NewItemHeaderProps {
  handler: () => void;
  handleNavigateToHome: () => void;
}

const NewItemHeader: React.FC<NewItemHeaderProps> = ({ handler, handleNavigateToHome }) => {
  return (
    <div className="flex justify-between">
      <h1 className="bg-gray-800 text-white text-xs xxs:text-sm xs:text-base rounded-xl px-1 xxs:px-3 py-3 grid place-items-center">
        New Item Details:
      </h1>

      <div className="flex gap-1 xxs:gap-2 xs:gap-3 items-center">
        <div
          onClick={handleNavigateToHome}
          className="cursor-pointer block border-gray-800 border-solid border-2 font-normal xxs:font-semibold xs:font-bold text-gray-800 hover:bg-gray-500 box-content text-small xxs:text-xs xs:text-base text-center py-1 xxs:py-3 px-1 xxs:px-3 rounded-xl cursor-pointer select-none"
        >
          Cancel
        </div>

        <div
          className="bg-gray-800 hover:bg-gray-700 box-content font-normal xxs:font-semibold xs:font-bold  text-white text-small xxs:text-xs xs:text-base text-center py-1 xxs:py-3 px-1 xxs:px-3 rounded-xl cursor-pointer select-none"
          onClick={handler}
        >
          Add Item
        </div>
      </div>
    </div>
  );
};

export default NewItemHeader;