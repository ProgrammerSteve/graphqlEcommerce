import React, { useState, useEffect } from "react";

import {
  PriceInput,
  FloatInput,
  IntegerInput,
  TextInput,
  TextAreaInput,
  BooleanInput,
} from "../inputComponents";

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
  const handleLength = ({ target: { value } }) =>
    setItem({ ...itemState, length: Number(value) });
  const handleWidth = ({ target: { value } }) =>
    setItem({ ...itemState, width: Number(value) });
  const handleHeight = ({ target: { value } }) =>
    setItem({ ...itemState, height: Number(value) });
  const handleWeight = ({ target: { value } }) =>
    setItem({ ...itemState, weight: Number(value) });
  const handleDiscontinuedTrue = () =>
    setItem({ ...itemState, discontinued: true });
  const handleDiscontinuedFalse = () =>
    setItem({ ...itemState, discontinued: false });
  const handleCategory = ({ target: { value } }) =>
    setItem({ ...itemState, category: `${value}`.toLowerCase() });

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
            <TextInput
              title={"Category"}
              value={itemState.category}
              handler={handleCategory}
              itemState={itemState}
            />
            <BooleanInput
              title={"Discontined"}
              value={itemState.discontinued}
              handleTrue={handleDiscontinuedTrue}
              handleFalse={handleDiscontinuedFalse}
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
            value={itemState.length}
            handler={handleLength}
            itemState={itemState}
          />
          <FloatInput
            title="Width [in]"
            value={itemState.width}
            handler={handleWidth}
            itemState={itemState}
          />
          <FloatInput
            title="Height [in]"
            value={itemState.height}
            handler={handleHeight}
            itemState={itemState}
          />
          <FloatInput
            title="Weight [lbs]"
            value={itemState.weight}
            handler={handleWeight}
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
