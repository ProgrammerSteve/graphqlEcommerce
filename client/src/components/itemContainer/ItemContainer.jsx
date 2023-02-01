import React from "react";

const ItemContainer = ({ children }) => {
  return (
    <div className="h-screen bg-gray-600 shadow-lg p-1 xxs:p-2 xs:p-4 sm:p-6 md:p-8 flex flex-grow flex-col gap-1">
      {children}
    </div>
  );
};

export default ItemContainer;
