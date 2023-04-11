import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartPage from "../CartPage";

describe("CartPage", () => {
  const items = [
    { id: 1, name: "Item 1", price: 10, isInCart: true },
    { id: 2, name: "Item 2", price: 20, isInCart: true },
    { id: 3, name: "Item 3", price: 30, isInCart: false },
  ];
  const handleQuantityChange = jest.fn();
  const removeItem = jest.fn();
  const subtotal = 50;
  const taxes = 6;
  const shipping = 0;

  test("renders the cart page with the correct elements", () => {
    render(
      <CartPage
        items={items}
        handleQuantityChange={handleQuantityChange}
        removeItem={removeItem}
        subtotal={subtotal}
        taxes={taxes}
        shipping={shipping}
      />
    );

    expect(screen.getByTestId("cart-page")).toBeInTheDocument();
    expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
    expect(screen.getByText("ORDER SUMMARY")).toBeInTheDocument();
    expect(screen.getByText("SUBTOTAL")).toBeInTheDocument();
    expect(screen.getByText("$ 50.00")).toBeInTheDocument();
    expect(screen.getByText("SHIPPING")).toBeInTheDocument();
    expect(screen.getByText("$ 0.00")).toBeInTheDocument();
    expect(screen.getByText("TAXES")).toBeInTheDocument();
    expect(screen.getByText("$ 6.00")).toBeInTheDocument();
    expect(screen.getByText("ESTIMATED TOTAL")).toBeInTheDocument();
    expect(screen.getByText("$ 56.00")).toBeInTheDocument();
    expect(
      screen.getByText("Congrats! You get free shipping")
    ).toBeInTheDocument();
    expect(screen.getByText("CHECK OUT")).toBeInTheDocument();
  });

  test("renders the correct number of items in cart", () => {
    render(
      <CartPage
        items={items}
        handleQuantityChange={handleQuantityChange}
        removeItem={removeItem}
        subtotal={subtotal}
        taxes={taxes}
        shipping={shipping}
      />
    );

    const itemInCartElements = screen.getAllByTestId("item-in-cart");
    expect(itemInCartElements).toHaveLength(2);
  });

  test("calls the handleQuantityChange function when the quantity is changed", () => {
    render(
      <CartPage
        items={items}
        handleQuantityChange={handleQuantityChange}
        removeItem={removeItem}
        subtotal={subtotal}
        taxes={taxes}
        shipping={shipping}
      />
    );

    const updateQuantityButtons = screen.getAllByRole("button", {
      name: /UPDATE QUANTITY/i,
    });
    fireEvent.click(updateQuantityButtons[0]);
    expect(handleQuantityChange).toHaveBeenCalledTimes(1);
  });

    test("calls the removeItem function when the remove button is clicked", () => {
      render(
        <CartPage
          items={items}
          handleQuantityChange={handleQuantityChange}
          removeItem={removeItem}
          subtotal={subtotal}
          taxes={taxes}
          shipping={shipping}
        />
      );

      const deleteButtons = screen.getAllByTestId("delete-button");
      fireEvent.click(deleteButtons[0]);
      expect(removeItem).toHaveBeenCalledTimes(1);
    });
});
