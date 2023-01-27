import React, { useState } from "react";
import PriceInput from "../priceInput/PriceInput.jsx";
import FloatInput from "../floatInput/FloatInput.jsx";
import IntegerInput from "../integerInput/IntegerInput.jsx";
import TextInput from "../textInput/TextInput.jsx";
import TextAreaInput from "../textAreaInput/TextAreaInput.jsx";

//    item
// alt: String
// description: String
// id: String
// name: String
// price: Float
// src: String
// stock: Number

const ItemCard = ({ item }) => {
  const [name, setName] = useState(item.name);
  const [stock, setStock] = useState(item.stock);
  const [price, setPrice] = useState(item.price);
  const [alt, setAlt] = useState(item.alt);
  const [description, setDescription] = useState(item.description);
  const [src, setSrc] = useState(item.src);
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

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSrc = (e) => {
    setSrc(e.target.value);
  };
  return (
    <div className="h-72 rounded-xl bg-gray-300 shadow-lg flex flex-grow">
      <div className="w-64 aspect-[2/3] rounded-xl overflow-clip">
        <img src={item.src} alt={item.alt} className="w-full h-full" />
      </div>

      <div className="flex-[2] flex flex-col">
        <div className="grid grid-cols-2 gap-3 px-4 bg-blue-400">
          <TextInput title={"Name"} value={name} handler={handleName} />
          <TextInput title={"Alt"} value={alt} handler={handleAlt} />
          <IntegerInput title={"Stock"} value={stock} handler={handleStock} />
          <PriceInput price={price} handlePrice={handlePrice} />
        </div>
        <div className="px-4 grow  bg-red-300">
          <TextAreaInput title="Src" value={src} handler={handleSrc} />
        </div>
      </div>

      <div className="flex-1 bg-green-300 grid justify-center">
        <FloatInput title="Length [cm]" value={stock} handler={handleStock} />
        <FloatInput title="Width [cm]" value={stock} handler={handleStock} />
        <FloatInput title="Height [cm]" value={stock} handler={handleStock} />
        <FloatInput title="Weight [lbs]" value={stock} handler={handleStock} />
      </div>

      <div className="flex-1 bg-purple-300">
        <TextAreaInput
          title="Description Text"
          value={description}
          handler={handleDescription}
        />
      </div>
    </div>
  );
};

export default ItemCard;
