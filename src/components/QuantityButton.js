import React from "react";
import { TfiMinus, TfiPlus } from "react-icons/tfi";

const QuantityButton = ({ quantity, setQuantity }) => {
  const increment = () => {
    setQuantity((prev) => {
      return prev + 1;
    });
  };

  const decrement = () => {
    setQuantity((prev) => {
      return prev - 1;
    });
  };

  return (
    <div className="quantity-button">
      <button
        data-testid="decrement-button"
        className="quantity-button__button"
        onClick={() => {
          decrement();
        }}
        data-inactive={quantity === 0 ? "true" : undefined}
      >
        <TfiMinus />
      </button>
      <input
        className="quantity-button__input"
        value={quantity}
        readyonly="true"
      />
      <button
        data-testid="increment-button"
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
