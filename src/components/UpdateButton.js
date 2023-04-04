import React from "react";

const UpdateButton = ({ itemId, quantity, handleQuantityChange }) => {
  return (
    <button
      className="button"
      onClick={() => {
        handleQuantityChange(itemId, quantity);
      }}
    >
      UPDATE
    </button>
  );
};

export default UpdateButton;
