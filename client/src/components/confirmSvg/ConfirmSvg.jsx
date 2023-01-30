import React, { useEffect } from "react";
import { useMutation, gql } from "@apollo/client";
import { UPDATE_ITEM } from "../../../utils/gqlQueries/mutations";

const ConfirmSvg = ({ itemState, toggleActive, newItem }) => {
  const [updateItem, { data, loading, error }] = useMutation(UPDATE_ITEM, {
    variables: {
      id: itemState.id,
      name: itemState.name,
      src: itemState.src,
      price: itemState.price,
      alt: itemState.alt,
      stock: itemState.stock,
      description: itemState.description,
    },
  });

  const handleUpdate = async () => {
    console.log("svg Handler");
    console.log(itemState);
    try {
      await updateItem();
    } catch (err) {
      console.log("trycatcherr:", err);
      console.log("error:", error);
    }

    console.log("data:", data);
    toggleActive();
  };

  const handleNew = () => {
    console.log("svg Handler");
    console.log(itemState);
    console.log("New Item Handler");
    toggleActive();
  };

  return (
    <div
      className="bg-gray-800 h-full w-[48px] rounded-tr-lg rounded-br-lg cursor-pointer grid place-items-center"
      onClick={newItem ? handleNew : handleUpdate}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className={"w-4 fill-white"}
      >
        <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
      </svg>
    </div>
  );
};

export default ConfirmSvg;
