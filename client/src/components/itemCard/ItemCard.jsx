import React, { useState, useEffect } from "react";
import ItemDetails from "./ItemDetails.jsx";
import ItemDimensions from "./ItemDimensions.jsx";
import { TextAreaInput } from "../inputComponents";

const ItemCard = ({ itemState, handlers, newItem = false }) => {
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
              handleName={handlers.name}
              handleAlt={handlers.alt}
              handleStock={handlers.stock}
              handlePrice={handlers.price}
              handleCategory={handlers.category}
              handleDiscontinuedFalse={handlers.discontinuedFalse}
              handleDiscontinuedTrue={handlers.discontinuedTrue}
              handleSrc={handlers.src}
              newItem={newItem}
            />
          </div>

          <div className="col-span-1 h-[300px] box-border gap-2 hidden lg:flex lg:flex-col justify-between">
            <ItemDimensions
              itemState={itemState}
              handleLength={handlers.length}
              handleWeight={handlers.weight}
              handleHeight={handlers.height}
              handleWidth={handlers.width}
              newItem={newItem}
            />
          </div>

          <div className="col-span-1 h-[300px] hidden lg:block">
            <TextAreaInput
              title="Description Text"
              value={itemState.description}
              handler={handlers.description}
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
            handleName={handlers.name}
            handleAlt={handlers.alt}
            handleStock={handlers.stock}
            handlePrice={handlers.price}
            handleCategory={handlers.category}
            handleDiscontinuedFalse={handlers.discontinuedFalse}
            handleDiscontinuedTrue={handlers.discontinuedTrue}
            handleSrc={handlers.src}
            newItem={newItem}
          />
        </div>

        <div className="col-span-2 xxs:col-span-1 h-[300px] box-border gap-2 flex flex-col justify-between">
          <ItemDimensions
            itemState={itemState}
            handleLength={handlers.length}
            handleWeight={handlers.weight}
            handleWidth={handlers.width}
            handleHeight={handlers.height}
            newItem={newItem}
          />
        </div>

        <div className="col-span-2 xxs:col-span-1 h-[300px]">
          <TextAreaInput
            title="Description Text"
            value={itemState.description}
            handler={handlers.description}
            itemState={itemState}
            newItem={newItem}
          />
        </div>
      </div>
    </>
  );
};

export default ItemCard;
