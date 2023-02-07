import React, { useState } from "react";
import ItemDetails from "./ItemDetails.jsx";
import ItemDimensions from "./ItemDimensions.jsx";
import { TextAreaInput } from "../inputComponents";

const ItemCard = ({ item, newItem = false }) => {
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
    <>
      <div className="flex justify-center md:justify-start w-[100%] gap-2">
        <div className="w-[200px] h-[300px] rounded-xl bg-gray-700">
          <img
            src={itemState.src}
            alt={itemState.alt}
            className="w-[200px] h-full box-border"
          />
        </div>

        <div className="grow h-[300px] hidden md:grid md:grid-cols-4 gap-2 box-border">
          <div className="col-span-4 lg:col-span-2 h-full hidden md:flex md:flex-col">
            <ItemDetails
              itemState={itemState}
              handleName={handleName}
              handleAlt={handleAlt}
              handleStock={handleStock}
              handlePrice={handlePrice}
              handleCategory={handleCategory}
              handleDiscontinuedFalse={handleDiscontinuedFalse}
              handleDiscontinuedTrue={handleDiscontinuedTrue}
              handleSrc={handleSrc}
              newItem={newItem}
            />
          </div>

          <div className="col-span-1 h-[300px] box-border gap-2 hidden lg:flex lg:flex-col justify-between">
            <ItemDimensions
              itemState={itemState}
              handleLength={handleLength}
              handleWeight={handleWeight}
              handleWidth={handleWidth}
              newItem={newItem}
            />
          </div>

          <div className="col-span-1 h-[300px] hidden lg:block">
            <TextAreaInput
              title="Description Text"
              value={itemState.description}
              handler={handleDescription}
              itemState={itemState}
              newItem={newItem}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 lg:hidden">
        <div className="col-span-2 h-[600px] xxs:h-[300px] flex flex-col md:hidden">
          <ItemDetails
            itemState={itemState}
            handleName={handleName}
            handleAlt={handleAlt}
            handleStock={handleStock}
            handlePrice={handlePrice}
            handleCategory={handleCategory}
            handleDiscontinuedFalse={handleDiscontinuedFalse}
            handleDiscontinuedTrue={handleDiscontinuedTrue}
            handleSrc={handleSrc}
            newItem={newItem}
          />
        </div>

        <div className="col-span-2 xxs:col-span-1 h-[300px] box-border gap-2 flex flex-col justify-between">
          <ItemDimensions
            itemState={itemState}
            handleLength={handleLength}
            handleWeight={handleWeight}
            handleWidth={handleWidth}
            handleHeight={handleHeight}
            newItem={newItem}
          />
        </div>

        <div className="col-span-2 xxs:col-span-1 h-[300px]">
          <TextAreaInput
            title="Description Text"
            value={itemState.description}
            handler={handleDescription}
            itemState={itemState}
            newItem={newItem}
          />
        </div>
      </div>
    </>
  );
};

export default ItemCard;
