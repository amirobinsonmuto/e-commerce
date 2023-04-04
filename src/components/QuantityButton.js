import React from "react";
import { TfiMinus, TfiPlus } from "react-icons/tfi";

const QuantityButton = ({ quantity, increment, decrement }) => {
  return (
    <div className="quantity-button">
      <button className="quantity-button__button" onClick={decrement}>
        <TfiMinus />
      </button>
      <input className="quantity-button__input" value={quantity} />
      <button className="quantity-button__button" onClick={increment}>
        <TfiPlus />
      </button>
    </div>
  );
};

export default QuantityButton;
