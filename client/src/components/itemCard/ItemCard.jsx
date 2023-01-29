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
  const [itemState, setItem] = useState(item);
  const handleName = ({ target: { value } }) =>
    setItem({ ...itemState, name: value });
  const handleStock = ({ target: { value } }) =>
    setItem({ ...itemState, stock: Number(value) });
  const handlePrice = ({ target: { value } }) =>
    setItem({ ...itemState, price: Number(value) });
  const handleAlt = ({ target: { value } }) =>
    setItem({ ...itemState, alt: value });
  const handleDescription = ({ target: { value } }) =>
    setItem({ ...itemState, description: value });
  const handleSrc = ({ target: { value } }) =>
    setItem({ ...itemState, src: value });

  return (
    <div className="h-[300px] max-h-[300px] p-2 rounded-xl bg-gray-300 shadow-lg box-content flex flex-grow gap-2">
      <div className="w-[200px] h-[300px] rounded-xl bg-gray-700">
        <img
          src={item.src}
          alt={item.alt}
          className="w-[200px] h-full box-border"
        />
      </div>

      <div className="grow h-[300px] flex gap-2 box-border">
        <div className="w-[50%] h-full flex flex-col">
          <div className="grid grid-cols-2 gap-3">
            <TextInput
              title={"Name"}
              value={itemState.name}
              handler={handleName}
              itemState={itemState}
            />
            <TextInput
              title={"Alt"}
              value={itemState.alt}
              handler={handleAlt}
              itemState={itemState}
            />
            <IntegerInput
              title={"Stock"}
              value={itemState.stock}
              handler={handleStock}
              itemState={itemState}
            />
            <PriceInput
              title={"Price"}
              price={itemState.price}
              handlePrice={handlePrice}
              itemState={itemState}
            />
          </div>
          <div className="pt-2 grow  ">
            <TextAreaInput
              title="Src"
              value={itemState.src}
              handler={handleSrc}
              itemState={itemState}
            />
          </div>
        </div>

        <div className="w-[25%] h-[300px] box-border gap-2 flex flex-col justify-between">
          <FloatInput
            title="Length [in]"
            value={itemState.stock}
            handler={handleStock}
            itemState={itemState}
          />
          <FloatInput
            title="Width [in]"
            value={itemState.stock}
            handler={handleStock}
            itemState={itemState}
          />
          <FloatInput
            title="Height [in]"
            value={itemState.stock}
            handler={handleStock}
            itemState={itemState}
          />
          <FloatInput
            title="Weight [lbs]"
            value={itemState.stock}
            handler={handleStock}
            itemState={itemState}
          />
        </div>

        <div className="w-[25%] h-[300px]">
          <TextAreaInput
            title="Description Text"
            value={itemState.description}
            handler={handleDescription}
            itemState={itemState}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
