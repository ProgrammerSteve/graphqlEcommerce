import React, { useState } from "react";

const TextInput = ({ title, value, handler }) => {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };
  return (
    <div className="bg-gray-800 text-gray-100 h-12 flex flex-grow w-64 rounded-lg">
      <div className="h-full w-18 bg-gray-800 grid place-items-center px-4 rounded-tl-lg rounded-bl-lg">
        <label>{title}</label>
      </div>

      <div className="grow h-full bg-gray-500">
        {active ? (
          <input
            type="text"
            value={value}
            onChange={handler}
            className="w-full h-full text-black pl-2"
          />
        ) : (
          <div className="grid items-center h-full w-full pl-2">{value}</div>
        )}
      </div>

      <div
        className="bg-gray-800 h-full rounded-tr-lg rounded-br-lg cursor-pointer"
        onClick={toggleActive}
      >
        {active ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-8 fill-white p-2 m-2"
          >
            <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-8 fill-white p-2 m-2"
          >
            <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default TextInput;
