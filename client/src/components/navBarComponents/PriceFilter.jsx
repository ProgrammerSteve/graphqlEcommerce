import React from "react";

const PriceFilter = ({ min, max, handleMin, handleMax }) => {
  return (
    <div className="bg-gray-800 px-4 pt-4 rounded-lg  border-solid border-2 border-gray-600">
      <div>
        <h2 className="text-white select-none">Price</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-white mr-2 select-none">Min:</label>
          <input
            type="number"
            step="0.01"
            min="0"
            value={min}
            onChange={handleMin}
            className="w-20 bg-gray-600 text-white rounded-md px-1"
          />
        </div>
        <div>
          <label className="text-white mr-2 select-none">Max:</label>
          <input
            type="number"
            step="0.01"
            min="0"
            value={max}
            onChange={handleMax}
            className="w-20 bg-gray-600 text-white rounded-md px-1"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
