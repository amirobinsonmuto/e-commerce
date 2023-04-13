import React from "react";
import QuantityButton from "../../components/QuantityButton";
import UpdateButton from "./UpdateButton";
import DeleteButton from "./DeleteButton";
import useCounter from "../../hooks/useCounter";

const ItemInCart = ({ item, handleQuantityChange, removeItem }) => {
  const { count, increment, decrement } = useCounter(item.quantity);

  return (
    <div className="cart-item" data-testid="item-in-cart">
      <img src={item.image} alt={`${item.name} image`} />
      <div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>{`$${item.price}`}</p>
        <p>Quantity: {item.quantity}</p>
        <div className="cart-item-buttons-wrapper">
          <QuantityButton quantity={count} increment={increment} decrement={decrement} />
          <UpdateButton
            itemId={item.id}
            quantity={count}
            handleQuantityChange={handleQuantityChange}
            removeItem={removeItem}
          />
          <DeleteButton itemId={item.id} removeItem={removeItem} />
        </div>
      </div>
    </div>
  );
};

export default ItemInCart;
