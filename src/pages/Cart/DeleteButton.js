import React from "react";
import { TfiClose } from "react-icons/tfi";

const DeleteButton = ({ itemId, removeItem }) => {
  return (
    <button
      className="button delete-button"
      onClick={() => {
        removeItem(itemId);
      }}
    >
      <TfiClose />
    </button>
  );
};

export default DeleteButton;
