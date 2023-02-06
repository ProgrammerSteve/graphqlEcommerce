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

const NewItemHeader = ({ toggleNewItem, handler }) => {
  return (
    <div className="flex justify-between">
      <h1 className="bg-gray-800 text-white text-xs xxs:text-sm xs:text-base rounded-xl px-1 xxs:px-3 py-3 grid place-items-center">
        New Item Details:
      </h1>

      <div className="flex gap-1 xxs:gap-2 xs:gap-3 items-center">
        <div
          className="border-gray-800 border-solid border-2 font-normal xxs:font-semibold xs:font-bold text-gray-800 hover:bg-gray-500 box-content text-small xxs:text-xs xs:text-base text-center py-1 xxs:py-3 px-1 xxs:px-3 rounded-xl cursor-pointer select-none"
          onClick={toggleNewItem}
        >
          Cancel
        </div>
        <div
          className="bg-gray-800 hover:bg-gray-700 box-content font-normal xxs:font-semibold xs:font-bold  text-white text-small xxs:text-xs xs:text-base text-center py-1 xxs:py-3 px-1 xxs:px-3 rounded-xl cursor-pointer select-none"
          onClick={handler}
        >
          Add Item
        </div>
      </div>
    </div>
  );
};

const ItemDetails = ({
  itemState,
  handleName,
  handleAlt,
  handleStock,
  handlePrice,
  handleCategory,
  handleDiscontinuedFalse,
  handleDiscontinuedTrue,
  handleSrc,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 xxs:grid-cols-2 gap-3">
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
          title={"Suspend"}
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
    </>
  );
};

const ItemDimensions = ({
  itemState,
  handleLength,
  handleHeight,
  handleWidth,
  handleWeight,
}) => {
  return (
    <>
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
    </>
  );
};

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
      <NewItemHeader toggleNewItem={toggleNewItem} handler={handler} />

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
            />
          </div>

          <div className="col-span-1 h-[300px] box-border gap-2 hidden lg:flex lg:flex-col justify-between">
            <ItemDimensions
              itemState={itemState}
              handleLength={handleLength}
              handleWeight={handleWeight}
              handleWidth={handleWidth}
            />
          </div>

          <div className="col-span-1 h-[300px] hidden lg:block">
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
          />
        </div>

        <div className="col-span-2 xxs:col-span-1 h-[300px] box-border gap-2 flex flex-col justify-between">
          <ItemDimensions
            itemState={itemState}
            handleLength={handleLength}
            handleWeight={handleWeight}
            handleWidth={handleWidth}
          />
        </div>

        <div className="col-span-2 xxs:col-span-1 h-[300px]">
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
  );
};

export default NewItemCard;
