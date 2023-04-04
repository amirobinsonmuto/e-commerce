import React from "react";

const DeleteButton = ({ itemId, removeItem }) => {
  return (
    <button
      className="button"
      onClick={() => {
        removeItem(itemId);
      }}
    >
      DELETE
    </button>
  );
};

export default DeleteButton;
