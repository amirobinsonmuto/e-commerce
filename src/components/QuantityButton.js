import React from "react";
import { TfiMinus, TfiPlus } from "react-icons/tfi";

const QuantityButton = ({ quantity, setQuantity }) => {
  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="quantity-button">
      <button
        className="quantity-button__button"
        onClick={() => {
          decrement();
        }}
        data-inactive={quantity === 0 ? "true" : undefined}
      >
        <TfiMinus />
      </button>
      <input className="quantity-button__input" value={quantity} readyOnly />
      <button
        className="quantity-button__button"
        onClick={() => {
          increment();
        }}
        data-inactive={quantity >= 100 ? "true" : undefined}
      >
        <TfiPlus />
      </button>
    </div>
  );
};

export default QuantityButton;
