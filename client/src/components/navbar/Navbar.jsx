import React, { useState } from "react";

const PriceFilter = ({ min, max, handleMin, handleMax }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg  border-solid border-2 border-gray-600">
      <div>
        <h2 className="text-white">Price</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-white mr-2">Min:</label>
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
          <label className="text-white mr-2">Max:</label>
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

const TextFilter = ({ text, handleText }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg border-solid border-2 border-gray-600">
      <div>
        <h2 className="text-white">Search</h2>
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

const NavTitle = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-white">Ecommerce CMS</h1>
    </div>
  );
};

const Navbar = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [text, setText] = useState("");
  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleMin = (e) => {
    setMin(Number(e.target.value));
  };
  const handleMax = (e) => {
    setMax(Number(e.target.value));
  };

  return (
    <div className="h-32 bg-gray-800 shadow-lg p-8 flex items-center justify-between rounded-lg">
      <NavTitle />

      <div className="flex gap-4">
        <TextFilter text={text} handleText={handleText} />
        <PriceFilter
          min={min}
          max={max}
          handleMin={handleMin}
          handleMax={handleMax}
        />
      </div>
    </div>
  );
};

export default Navbar;
