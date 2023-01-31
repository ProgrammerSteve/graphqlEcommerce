import React, { useState } from "react";

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

const AddItemButton = ({ toggleNewItem }) => {
  return (
    <div
      className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg border-solid border-2 border-gray-600 cursor-pointer hover:border-gray-500 grid place-items-center"
      onClick={toggleNewItem}
    >
      <div className="flex justify-between gap-2 px-2">
        <div className="text-white grid place-items-center select-none">
          Add Item
        </div>
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

const AlphabetizeSort = () => {
  return (
    <div className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg border-solid border-2 border-gray-600 cursor-pointer hover:border-gray-500 grid place-items-center">
      <div className="flex justify-between gap-2 px-2">
        <div className="text-white w-8 flex items-baseline justify-center gap-1 select-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="fill-white h-full"
          >
            <path d="M253.5 51.7C248.6 39.8 236.9 32 224 32s-24.6 7.8-29.5 19.7l-120 288-40 96c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L125.3 384H322.7l31.8 76.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-40-96-120-288zM296 320H152l72-172.8L296 320z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="fill-white h-1/2"
          >
            <path d="M0 64C0 46.3 14.3 32 32 32H352c12.4 0 23.7 7.2 29 18.4s3.6 24.5-4.4 34.1L100.3 416H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.4 0-23.7-7.2-29-18.4s-3.6-24.5 4.4-34.1L283.7 96H32C14.3 96 0 81.7 0 64z" />
          </svg>
        </div>
        <div className="w-4 flex flex-col justify-between py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="fill-white"
          >
            <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="fill-white"
          >
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const PriceSort = () => {
  return (
    <div className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg border-solid border-2 border-gray-600 cursor-pointer hover:border-gray-500 grid place-items-center">
      <div className="flex justify-between gap-2 px-2">
        <div className="text-white grid w-4 place-items-center select-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="fill-white"
          >
            <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c10.6 1.6 42.1 6.7 55.1 10c17.1 4.3 27.5 21.7 23.2 38.9s-21.7 27.5-38.9 23.2c-9.3-2.4-37.6-7-48.9-8.7c-32.1-4.8-59.6-2.4-78.5 4.9c-18.3 7-25.9 16.9-27.9 28c-1.9 10.7-.5 16.8 1.3 20.6c1.9 4 5.6 8.5 12.9 13.4c16.2 10.8 41.1 17.9 73.3 26.7l2.8 .8c28.4 7.7 63.2 17.2 89 34.3c14.1 9.4 27.3 22.1 35.5 39.7c8.3 17.8 10.1 37.8 6.3 59.1c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.2-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.4 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.7 .5-16.8-1.3-20.6c-1.9-4-5.6-8.5-12.9-13.4c-16.2-10.8-41.1-17.9-73.3-26.7l-2.8-.8c-28.4-7.7-63.2-17.2-89-34.3c-14.1-9.4-27.3-22.1-35.5-39.7c-8.3-17.8-10.1-37.8-6.3-59.1C25 114.1 53 89.3 86 76.7c13-5 27.2-8.2 42-10V32c0-17.7 14.3-32 32-32z" />
          </svg>
        </div>

        <div className="w-4 flex flex-col justify-between py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="fill-white"
          >
            <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="fill-white"
          >
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
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
        <AlphabetizeSort />
        <PriceSort />
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
