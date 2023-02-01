import React, { useState } from "react";
import { useCreateItem } from "../../../utils/hooks/useCreateItem.js";

import {
  PriceInput,
  FloatInput,
  IntegerInput,
  TextInput,
  TextAreaInput,
  BooleanInput,
} from "../../components/inputComponents";

const NewItemCard = ({ toggleNewItem }) => {
  const [itemState, setItem] = useState({
    id: "",
    name: "",
    src: "",
    alt: "",
    stock: 0,
    price: 0.0,
    description: "",
    length: 0.0,
    width: 0.0,
    height: 0.0,
    weight: 0.0,
    category: "",
    discontinued: false,
  });

  const [handleAddNewItem] = useCreateItem(itemState);
  const handler = async () => {
    await handleAddNewItem();
    toggleNewItem();
  };

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
  const handleLength = ({ target: { value } }) =>
    setItem({ ...itemState, length: Number(value) });
  const handleWidth = ({ target: { value } }) =>
    setItem({ ...itemState, width: Number(value) });
  const handleHeight = ({ target: { value } }) =>
    setItem({ ...itemState, height: Number(value) });
  const handleWeight = ({ target: { value } }) =>
    setItem({ ...itemState, weight: Number(value) });
  const handleCategory = ({ target: { value } }) =>
    setItem({ ...itemState, category: `${value}`.toLowerCase() });
  const handleDiscontinuedTrue = () =>
    setItem({ ...itemState, discontinued: true });
  const handleDiscontinuedFalse = () =>
    setItem({ ...itemState, discontinued: false });
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
              <TextInput
                title={"Category"}
                value={itemState.category}
                handler={handleCategory}
                itemState={itemState}
                newItem={true}
              />
              <BooleanInput
                title={"Discontined"}
                value={itemState.discontinued}
                handleTrue={handleDiscontinuedTrue}
                handleFalse={handleDiscontinuedFalse}
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
              value={itemState.length}
              handler={handleLength}
              itemState={itemState}
              newItem={true}
            />
            <FloatInput
              title="Width [in]"
              value={itemState.width}
              handler={handleWidth}
              itemState={itemState}
              newItem={true}
            />
            <FloatInput
              title="Height [in]"
              value={itemState.height}
              handler={handleHeight}
              itemState={itemState}
              newItem={true}
            />
            <FloatInput
              title="Weight [lbs]"
              value={itemState.weight}
              handler={handleWeight}
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
        <div
          className="bg-gray-800 hover:bg-gray-700 box-content w-1/3 text-white text-center py-6 px-6 rounded-xl cursor-pointer select-none"
          onClick={toggleNewItem}
        >
          Cancel
        </div>
        <div
          className="bg-gray-800 hover:bg-gray-700 box-content w-2/3 text-white text-center py-6 px-6 rounded-xl cursor-pointer select-none"
          onClick={handler}
        >
          Add Item
        </div>
      </div>
    </div>
  );
};

export default NewItemCard;
