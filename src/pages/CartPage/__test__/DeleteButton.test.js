import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DeleteButton from "../DeleteButton";
import "@testing-library/jest-dom";

describe("DeleteButton", () => {
  test("renders a delete button", () => {
    render(<DeleteButton itemId={1} removeItem={() => {}} />);
    const deleteButton = screen.getByTestId("delete-button");
    expect(deleteButton).toBeInTheDocument();
    expect(deleteButton).toHaveClass("button", "delete-button");
  });

  test("calls the removeItem callback when clicked", async () => {
    const removeItemMock = jest.fn();
    const user = userEvent.setup();
    render(<DeleteButton itemId={1} removeItem={removeItemMock} />);
    const deleteButton = screen.getByTestId("delete-button");
    await user.click(deleteButton);
    expect(removeItemMock).toHaveBeenCalledTimes(1);
  });
});
