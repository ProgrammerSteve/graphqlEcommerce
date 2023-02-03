import React from "react";
import UpArrow from "./UpArrow.jsx";
import DownArrow from "./DownArrow.jsx";
import { SORT_OPTIONS } from "../../../utils/filterSorting.js";

const AlphabetizeSort = ({ handleSortOption, sortOption }) => {
  return (
    <div className="bg-gray-800 py-4 px-2 lg:px-3 xl:px-4  rounded-lg border-solid border-2 border-gray-600 flex items-center justify-center gap-2">
      <div className="flex gap-0 h-full">
        <div className="text-white grid w-4 place-items-center">
          <svg
            id="letter-A"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="fill-white w-4 scale-100 md:scale-[80%] mdlg:scale-90 lg:scale-100"
          >
            <path d="M253.5 51.7C248.6 39.8 236.9 32 224 32s-24.6 7.8-29.5 19.7l-120 288-40 96c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L125.3 384H322.7l31.8 76.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-40-96-120-288zM296 320H152l72-172.8L296 320z" />
          </svg>
        </div>
        <div className="text-white grid w-4 place-items-center select-none">
          <svg
            id="right-arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="fill-white w-4 scale-[75%] md:scale-[65%] mdlg:scale-[70%] lg:scale-[75%]"
          >
            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
          </svg>
        </div>
        <div className="text-white grid w-4 place-items-center select-none">
          <svg
            id="letter-Z"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="fill-white w-4 scale-[90%] md:scale-[70%] mdlg:scale-[80%] lg:scale-[90%]"
          >
            <path d="M0 64C0 46.3 14.3 32 32 32H352c12.4 0 23.7 7.2 29 18.4s3.6 24.5-4.4 34.1L100.3 416H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.4 0-23.7-7.2-29-18.4s-3.6-24.5 4.4-34.1L283.7 96H32C14.3 96 0 81.7 0 64z" />
          </svg>
        </div>
      </div>

      <div className="w-4 flex flex-col justify-between py-2">
        <UpArrow
          handler={handleSortOption.bind(
            this,
            SORT_OPTIONS.ALPHABETICALLY_ACCENDING
          )}
          selected={sortOption === SORT_OPTIONS.ALPHABETICALLY_ACCENDING}
        />
        <DownArrow
          handler={handleSortOption.bind(
            this,
            SORT_OPTIONS.ALPHABETICALLY_DECENDING
          )}
          selected={sortOption === SORT_OPTIONS.ALPHABETICALLY_DECENDING}
        />
      </div>
    </div>
  );
};

export default AlphabetizeSort;
