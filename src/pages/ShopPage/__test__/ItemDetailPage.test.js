import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import itemImage from "../../../assets/item.png";
import ItemDetailPage from "../ItemDetailPage";

describe("ItemDetailPage", () => {
  const items = [
    {
      id: 1,
      name: "Item 1",
      description: "Description for Item 1",
      image: itemImage,
    },
    {
      id: 2,
      name: "Item 2",
      description: "Description for Item 2",
      image: itemImage,
    },
  ];

  //   const addToCart = jest.fn();

  test("test", () => {
    expect(true).toEqual(true);
  });

  //   test("renders the item details", () => {
  //     const route = "/e-commerce/shop/2";
  //     render(
  //         <MemoryRouter initialEntries={[route]}>
  //           <App />
  //         </MemoryRouter>
  //       );

  //     expect(screen.getByText(item.name)).toBeInTheDocument();
  //     expect(screen.getByText(item.description)).toBeInTheDocument();
  //     expect(screen.getByAltText(`${item.name} image`)).toBeInTheDocument();
  //   });

  //   test("increment button increments quantity ", async () => {
  //     const user = userEvent.setup();
  //     render(
  //       <BrowserRouter>
  //         <ItemDetailPage items={items} addToCart={addToCart} />
  //       </BrowserRouter>
  //     );

  //     const incrementButton = screen.getByTestId("increment-button");
  //     await user.click(incrementButton); // increment quantity

  //     const decrementButton = screen.getByTestId("increment-button");
  //     await user.click(decrementButton); // decrement quantity

  //     const addToCartButton = screen.getByRole("button", { name: /Add to cart/i });
  //     await user.click(addToCartButton);

  //     expect(addToCart).toHaveBeenCalledTimes(1);
  //     expect(addToCart).toHaveBeenCalledWith(items[0].id, 1); // id and quantity
  //   });

  //   test("adds item to cart when AddToCartButton is clicked", async () => {
  //     const user = userEvent.setup();
  //     render(
  //       <BrowserRouter>
  //         <ItemDetailPage items={items} addToCart={addToCart} />
  //       </BrowserRouter>
  //     );

  //     const addToCartButton = screen.getByRole("button", { name: /Add to cart/i });
  //     await user.click(addToCartButton);

  //     expect(addToCart).toHaveBeenCalledTimes(1);
  //   });
});
