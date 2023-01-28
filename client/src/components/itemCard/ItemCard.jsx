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

//length: Float
//width: Float
//height: Float
//weight: Float

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
    <div className="h-[300px] max-h-[300px] p-2 rounded-xl bg-gray-300 shadow-lg box-content flex flex-grow gap-2">
      <div className="w-[200px] h-[300px] rounded-xl bg-red-700">
        <img
          src={item.src}
          alt={item.alt}
          className="w-[200px] h-full box-border"
        />
      </div>

      <div className="grow h-[300px] flex gap-2 box-border">
        <div className="w-[50%] h-full flex flex-col">
          <div className="grid grid-cols-2 gap-3">
            <TextInput title={"Name"} value={name} handler={handleName} />
            <TextInput title={"Alt"} value={alt} handler={handleAlt} />
            <IntegerInput title={"Stock"} value={stock} handler={handleStock} />
            <PriceInput
              title={"Price"}
              price={price}
              handlePrice={handlePrice}
            />
          </div>
          <div className="pt-2 grow  ">
            <TextAreaInput title="Src" value={src} handler={handleSrc} />
          </div>
        </div>

        <div className="w-[25%] h-[300px] box-border gap-2 flex flex-col justify-between">
          <FloatInput title="Length [in]" value={stock} handler={handleStock} />
          <FloatInput title="Width [in]" value={stock} handler={handleStock} />
          <FloatInput title="Height [in]" value={stock} handler={handleStock} />
          <FloatInput
            title="Weight [lbs]"
            value={stock}
            handler={handleStock}
          />
        </div>

        <div className="w-[25%] h-[300px]">
          <TextAreaInput
            title="Description Text"
            value={description}
            handler={handleDescription}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
