import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import QuantityButton from "../QuantityButton";
import "@testing-library/jest-dom";
// import { act } from "react-dom/test-utils";
// import userEvent from "@testing-library/user-event";

describe("QuantityButton", () => {
  test("renders input with correct initial quantity value", () => {
    render(<QuantityButton quantity={3} />);
    const input = screen.getByDisplayValue("3");
    expect(input).toBeInTheDocument();
  });

  test("calls setQuantity with incremented quantity when increment button is clicked", async () => {
    const setState = jest.fn();
    render(<QuantityButton quantity={3} setQuantity={setState} />);
    const incrementButton = screen.getByTestId("increment-button");
    fireEvent.click(incrementButton);
    expect(setState).toHaveBeenCalledTimes(1);
  });

  test("calls setQuantity with decremented quantity when increment button is clicked", async () => {
    const setState = jest.fn();
    render(<QuantityButton quantity={3} setQuantity={setState} />);
    const decrementButton = screen.getByTestId("decrement-button");
    fireEvent.click(decrementButton);
    expect(setState).toHaveBeenCalledTimes(1);
  });

  test("disables increment button when quantity is equal to or greater than 100", () => {
    render(<QuantityButton quantity={100} />);
    const incrementButton = screen.getByTestId("increment-button");
    expect(incrementButton).toHaveAttribute("data-inactive", "true");
  });

  test("disables decrement button when quantity is equal to 0", () => {
    render(<QuantityButton quantity={0} />);
    const decrementButton = screen.getByTestId("decrement-button");
    expect(decrementButton).toHaveAttribute("data-inactive", "true");
  });
});
