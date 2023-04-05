import React from "react";

const AddToCartButton = ({ itemId, quantity, addToCart }) => {
  return (
    <button
      className="button"
      onClick={(e) => {
        e.stopPropagation();
        addToCart(itemId, quantity);
      }}
    >
      ADD TO CART
    </button>
  );
};

export default AddToCartButton;
