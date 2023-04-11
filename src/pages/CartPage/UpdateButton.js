import React from "react";

const UpdateButton = ({
  itemId,
  quantity,
  handleQuantityChange,
  removeItem,
}) => {
  return (
    <button
      className="button"
      onClick={() => {
        handleQuantityChange(itemId, quantity);
        if (quantity === 0) {
          removeItem(itemId);
        }
      }}
    >
      UPDATE QUANTITY
    </button>
  );
};

export default UpdateButton;
