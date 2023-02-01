import React from "react";

const TextFilter = ({ text, handleText }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg border-solid border-2 border-gray-600">
      <div>
        <h2 className="text-white select-none">Search</h2>
      </div>
      <div className="grid grid-cols-1">
        <div>
          <input
            type="text"
            value={text}
            onChange={handleText}
            className="w-56 bg-gray-600 text-white rounded-md px-3"
          />
        </div>
      </div>
    </div>
  );
};

export default TextFilter;
