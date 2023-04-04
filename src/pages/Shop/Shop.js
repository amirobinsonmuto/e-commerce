import React from "react";
import Item from "./Item";

const Shop = ({ items }) => {
  return (
    <main className="container">
      <h1>Shop</h1>
      <div className="grid-container">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Shop;
