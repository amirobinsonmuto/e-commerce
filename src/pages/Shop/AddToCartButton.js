import React from "react";

const AddToCartButton = ({ itemId, quantity, addToCart }) => {
  return (
    <button
      className="button"
      onClick={() => {
        addToCart(itemId, quantity);
      }}
    >
      ADD TO CART
    </button>
  );
};

export default AddToCartButton;
