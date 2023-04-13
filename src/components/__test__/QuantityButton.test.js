import QuantityButton from "../QuantityButton";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("Quantity Button", () => {
  test("increment and decrement buttons are fired when the increment button is clicked", async () => {
    const mockIncrement = jest.fn();
    const mockDecrement = jest.fn();
    render(
      <QuantityButton
        quantity={0}
        increment={mockIncrement}
        decrement={mockDecrement}
      />
    );
    const user = userEvent.setup();
    await user.click(screen.getByTestId("increment-button"));
    expect(mockIncrement).toHaveBeenCalledTimes(1);
    await user.click(screen.getByTestId("decrement-button"));
    expect(mockDecrement).toHaveBeenCalledTimes(1);
  });

  test("minus button is disabled when the quantity is 0", () => {
    render(<QuantityButton quantity={0} />);
    expect(screen.getByTestId("decrement-button")).toHaveAttribute(
      "data-inactive",
      "true"
    );
  });

  test("plus button is disabled when the quantity is 100", () => {
    render(<QuantityButton quantity={100} />);
    expect(screen.getByTestId("increment-button")).toHaveAttribute(
      "data-inactive",
      "true"
    );
  });
});
