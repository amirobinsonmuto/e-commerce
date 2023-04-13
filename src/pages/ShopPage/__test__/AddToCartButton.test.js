import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import AddToCartButton from "../AddToCartButton";

describe("Add To Cart Button", () => {
  test("a function is fired when the add to cart button is clicked", async () => {
    const mockAddToCart = jest.fn();
    render(<AddToCartButton addToCart={mockAddToCart} />);
    const user = userEvent.setup();
    await user.click(screen.getByTestId("add-to-cart-button"));
    expect(mockAddToCart).toHaveBeenCalledTimes(1);
  });
});
