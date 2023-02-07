import React from "react";

import {
  TextInput,
  IntegerInput,
  PriceInput,
  BooleanInput,
  TextAreaInput,
} from "../inputComponents";

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
  newItem = false,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 xxs:grid-cols-2 gap-3">
        <TextInput
          title={"Name"}
          value={itemState.name}
          handler={handleName}
          itemState={itemState}
          newItem={newItem}
        />
        <TextInput
          title={"Alt"}
          value={itemState.alt}
          handler={handleAlt}
          itemState={itemState}
          newItem={newItem}
        />
        <IntegerInput
          title={"Stock"}
          value={itemState.stock}
          handler={handleStock}
          itemState={itemState}
          newItem={newItem}
        />
        <PriceInput
          title={"Price"}
          price={itemState.price}
          handlePrice={handlePrice}
          itemState={itemState}
          newItem={newItem}
        />
        <TextInput
          title={"Category"}
          value={itemState.category}
          handler={handleCategory}
          itemState={itemState}
          newItem={newItem}
        />
        <BooleanInput
          title={"Suspend"}
          value={itemState.discontinued}
          handleTrue={handleDiscontinuedTrue}
          handleFalse={handleDiscontinuedFalse}
          itemState={itemState}
          newItem={newItem}
        />
      </div>

      <div className="pt-2 grow  ">
        <TextAreaInput
          title="Src"
          value={itemState.src}
          handler={handleSrc}
          itemState={itemState}
          newItem={newItem}
        />
      </div>
    </>
  );
};
export default ItemDetails;
