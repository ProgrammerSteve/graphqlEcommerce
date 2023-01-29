import React, { useState } from "react";
import FloatInput from "../floatInput/FloatInput.jsx";
import IntegerInput from "../integerInput/IntegerInput.jsx";
import TextInput from "../textInput/TextInput.jsx";
import TextAreaInput from "../textAreaInput/TextAreaInput.jsx";
import PriceInput from "../priceInput/PriceInput.jsx";

const NewItemCard = () => {
  const [itemState, setItem] = useState({
    id: "",
    name: "",
    src: "",
    alt: "",
    stock: 0,
    price: 0.0,
    description: "",
  });
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
    <div className="p-2 rounded-xl bg-gray-300 shadow-lg box-content grow flex flex-col gap-4">
      <div className="bg-gray-800 rounded-xl h-16 px-6 py-2 w-full text-white text-2xl text-center">
        New Item Details:
      </div>
      <div className="flex w-[100%] gap-2">
        <div className="w-[200px] h-[300px] rounded-xl bg-gray-700">
          <img
            src={itemState.src}
            alt={itemState.alt}
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
                newItem={true}
              />
              <TextInput
                title={"Alt"}
                value={itemState.alt}
                handler={handleAlt}
                itemState={itemState}
                newItem={true}
              />
              <IntegerInput
                title={"Stock"}
                value={itemState.stock}
                handler={handleStock}
                itemState={itemState}
                newItem={true}
              />
              <PriceInput
                title={"Price"}
                price={itemState.price}
                handlePrice={handlePrice}
                itemState={itemState}
                newItem={true}
              />
            </div>
            <div className="pt-2 grow  ">
              <TextAreaInput
                title="Src"
                value={itemState.src}
                handler={handleSrc}
                itemState={itemState}
                newItem={true}
              />
            </div>
          </div>

          <div className="w-[25%] h-[300px] box-border gap-2 flex flex-col justify-between">
            <FloatInput
              title="Length [in]"
              value={itemState.stock}
              handler={handleStock}
              itemState={itemState}
              newItem={true}
            />
            <FloatInput
              title="Width [in]"
              value={itemState.stock}
              handler={handleStock}
              itemState={itemState}
              newItem={true}
            />
            <FloatInput
              title="Height [in]"
              value={itemState.stock}
              handler={handleStock}
              itemState={itemState}
              newItem={true}
            />
            <FloatInput
              title="Weight [lbs]"
              value={itemState.stock}
              handler={handleStock}
              itemState={itemState}
              newItem={true}
            />
          </div>

          <div className="w-[25%] h-[300px]">
            <TextAreaInput
              title="Description Text"
              value={itemState.description}
              handler={handleDescription}
              itemState={itemState}
              newItem={true}
            />
          </div>
        </div>
      </div>
      <div className="flex ml-auto gap-4 w-1/2 ">
        <div className="bg-gray-800 hover:bg-gray-700 box-content w-1/3 text-white text-center py-6 px-6 rounded-xl cursor-pointer">
          Cancel
        </div>
        <div className="bg-gray-800 hover:bg-gray-700 box-content w-2/3 text-white text-center py-6 px-6 rounded-xl cursor-pointer">
          Add Item
        </div>
      </div>
    </div>
  );
};

export default NewItemCard;
