import React from "react";
import { TfiMinus, TfiPlus } from "react-icons/tfi";

const QuantityButton = () => {
  return (
    <div className="quantity-button">
      <button className="quantity-button__button">
        <TfiMinus />
      </button>
      <input className="quantity-button__input" />
      <button className="quantity-button__button">
        <TfiPlus />
      </button>
    </div>
  );
};

export default QuantityButton;
