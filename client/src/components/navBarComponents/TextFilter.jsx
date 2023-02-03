import React from "react";

const TextFilter = ({ text, handleText }) => {
  return (
    <div className="bg-gray-800 px-2 lg:px-3 xl:px-4 grid items-center py-4 rounded-lg border-solid border-2 border-gray-600">
      <h2 className="text-white block select-none">Search</h2>

      <input
        type="text"
        value={text}
        onChange={handleText}
        className="block md:w-28 mdlg:w-32 lg:w-38 xl:w-48 2xl:w-56 bg-gray-600 text-white rounded-md px-3"
      />
    </div>
  );
};

export default TextFilter;
