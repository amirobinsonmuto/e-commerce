import React from "react";
import { TfiMinus, TfiPlus } from "react-icons/tfi";

const QuantityButton = ({ quantity, setQuantity }) => {
  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    // change the alert negative number to making button inactive later
    quantity > 0 ? setQuantity(quantity - 1) : alert("no negative number");
  };

  return (
    <div className="quantity-button">
      <button
        className="quantity-button__button"
        onClick={() => {
          decrement();
        }}
      >
        <TfiMinus />
      </button>
      <input className="quantity-button__input" value={quantity} readOnly />
      <button
        className="quantity-button__button"
        onClick={() => {
          increment();
        }}
      >
        <TfiPlus />
      </button>
    </div>
  );
};

export default QuantityButton;
