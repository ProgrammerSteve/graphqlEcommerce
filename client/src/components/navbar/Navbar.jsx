import React, { useState } from "react";

//Make a min/max filter for stock
//add a sortBy component for Alphabetical, Price, or Stock

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

const AddItemButton = ({ toggleNewItem }) => {
  return (
    <div
      className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg border-solid border-2 border-gray-600 cursor-pointer hover:border-gray-500 grid place-items-center"
      onClick={toggleNewItem}
    >
      <div className="flex justify-between gap-2 px-2">
        <div className="text-white grid place-items-center">Add Item</div>
        <div className="w-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="fill-white"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
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

const Navbar = ({
  textSearch,
  handleTextSearch,
  minPrice,
  handleMinPrice,
  maxPrice,
  handleMaxPrice,
  toggleNewItem,
}) => {
  return (
    <div className="h-32 bg-gray-800 shadow-lg p-8 flex items-center justify-between rounded-lg">
      <NavTitle />

      <div className="flex gap-4">
        <AddItemButton toggleNewItem={toggleNewItem} />
        <TextFilter text={textSearch} handleText={handleTextSearch} />
        <PriceFilter
          min={minPrice}
          max={maxPrice}
          handleMin={handleMinPrice}
          handleMax={handleMaxPrice}
        />
      </div>
    </div>
  );
};

export default Navbar;
