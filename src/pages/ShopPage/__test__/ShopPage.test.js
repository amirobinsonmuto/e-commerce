import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import ShopPage from "../ShopPage";
import itemImage from "../../../assets/logo.png";

describe("ShopPage", () => {
  const items = [
    { id: 1, image: itemImage, name: "Item 1", price: 10 },
    { id: 2, image: itemImage, name: "Item 2", price: 20 },
    { id: 3, image: itemImage, name: "Item 3", price: 30 },
  ];

  const addToCart = jest.fn();

  test("renders the items with correct data", () => {
    render(
      <BrowserRouter>
        <ShopPage items={items} addToCart={addToCart} />
      </BrowserRouter>
    );

    const itemElements = screen.getAllByTestId("item");
    expect(itemElements.length).toBe(items.length);
    const addButtons = screen.getAllByRole("button", { name: /Add to cart/i });

    itemElements.forEach((itemElement, index) => {
      const item = items[index];
      const imageElement = screen.getByAltText(`${item.name} image`);
      const nameElement = screen.getByText(item.name);
      const priceElement = screen.getByText(`$${item.price}`);

      expect(imageElement).toBeInTheDocument();
      expect(nameElement).toBeInTheDocument();
      expect(priceElement).toBeInTheDocument();

      addButtons[index].click();
    });

    expect(addToCart).toHaveBeenCalledTimes(3);
  });
});
