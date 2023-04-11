// import React from "react";
// import { render, screen } from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";
// import ItemDetailPage from "./ItemDetailPage";
// import itemImage from "../../assets/item.png";

// describe("ItemDetailPage", () => {
//   const items = [
//     {
//       id: 1,
//       name: "Item 1",
//       description: "Description for Item 1",
//       image: itemImage,
//     },
//     {
//       id: 2,
//       name: "Item 2",
//       description: "Description for Item 2",
//       image: itemImage,
//     },
//   ];

//   const addToCart = jest.fn();

//   test("renders the item details", () => {
//     render(
//       <BrowserRouter>
//         <ItemDetailPage items={items} addToCart={addToCart} />
//       </BrowserRouter>
//     );

//     const item = items[0];
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
// });
