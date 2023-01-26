import React, { useState } from "react";
import NameInput from "../nameInput/NameInput.jsx";
import StockInput from "../stockInput/StockInput.jsx";
import PriceInput from "../priceInput/PriceInput.jsx";
import AltInput from "../altInput/AltInput.jsx";

const ItemCard = () => {
  const [name, setName] = useState("blah");
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [alt, setAlt] = useState("alt text");
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleStock = (e) => {
    setStock(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(Number(e.target.value));
  };

  const handleAlt = (e) => {
    setAlt(e.target.value);
  };
  return (
    <div className="h-72 rounded-xl bg-gray-300 shadow-lg flex flex-grow">
      <div className="w-32 aspect-[1/1.6] bg-red-200">
        <img src="" alt="alt text" />
      </div>
      <div className="grow">
        <div className="grid grid-cols-2 gap-3">
          <NameInput name={name} handleName={handleName} />
          <AltInput alt={alt} handleAlt={handleAlt} />
          <StockInput stock={stock} handleStock={handleStock} />
          <PriceInput price={price} handlePrice={handlePrice} />
        </div>

        <div>Category:</div>
      </div>
      <div className="grow">
        <div>Description:</div>
      </div>
    </div>
  );
};

export default ItemCard;
