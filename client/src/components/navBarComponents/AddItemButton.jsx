import React from "react";

const AddItemButton = ({ toggleNewItem }) => {
  return (
    <div
      className="bg-gray-800 hover:bg-gray-700 py-4 px-2 lg:px-3 xl:px-4  rounded-lg border-solid border-2 border-gray-600 cursor-pointer hover:border-gray-500 grid place-items-center"
      onClick={toggleNewItem}
    >
      <div className="flex justify-between gap-2 px-2">
        <div className="text-white grid place-items-center select-none">
          Add
        </div>
        <div className="w-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="fill-white scale-100 md:scale-[80%] mdlg:scale-90 lg:scale-100"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AddItemButton;
