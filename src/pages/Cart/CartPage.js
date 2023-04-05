import React from "react";
import ItemInCart from "./ItemInCart";
import { useEffect } from "react";

const Cart = ({
  items,
  handleQuantityChange,
  removeItem,
  subtotal,
  taxes,
  shipping,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="container">
      <h1>Shopping Cart</h1>
      <div className="cart-wrapper">
        <div className="cart-items-wrapper">
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
        <div class="order-summary">
          <h2>ORDER SUMMARY</h2>
          <table>
            <tbody>
              <tr>
                <td>SUBTOTAL</td>
                <td>$ {subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td>SHIPPING</td>
                <td>$ {shipping.toFixed(2)}</td>
              </tr>
              <tr>
                <td>TAXES</td>
                <td>$ {taxes.toFixed(2)}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>ESTIMATED TOTAL</td>
                <td>
                  ${" "}
                  {(
                    Number(subtotal.toFixed(2)) +
                    Number(shipping.toFixed(2)) +
                    Number(taxes.toFixed(2))
                  ).toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
          <br />
          <p>
            {shipping === 0
              ? "Congrats! You get free shipping"
              : "Your shipping will be free when you order more than $50"}
          </p>
          <button className="button wide-button">CHECK OUT</button>
        </div>
      </div>
    </main>
  );
};

export default Cart;
