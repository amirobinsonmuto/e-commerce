import React from "react";
import Item from "./Item";

const ShopPage = ({ items, addToCart }) => {
  return (
    <main className="container" data-testid="shop-page">
      <h1>Shop</h1>
      <div className="grid-container">
        {items.map((item) => (
          <Item key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </main>
  );
};

export default ShopPage;
