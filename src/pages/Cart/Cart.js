import React from "react";
import ItemInCart from "./ItemInCart";

const Cart = ({ items, handleQuantityChange, removeItem }) => {
  return (
    <main className="container">
      <h1>Shopping Cart</h1>
      <div className="cart-container">
        {items
          .filter((item) => item.isInCart)
          .map((item) => (
            <ItemInCart
              key={item.id}
              item={item}
              handleQuantityChange={handleQuantityChange}
              removeItem={removeItem}
            />
          ))}
      </div>
    </main>
  );
};

export default Cart;
