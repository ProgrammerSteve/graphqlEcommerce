import React from "react";

const ItemContainer = ({ children }) => {
  return (
    <div className="h-screen bg-gray-600 shadow-lg p-8 flex flex-col gap-4">
      {children}
    </div>
  );
};

export default ItemContainer;
