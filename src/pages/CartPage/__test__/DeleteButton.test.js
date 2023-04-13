import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import DeleteButton from "../DeleteButton";

describe("Delete Button", () => {
  test("a function is fired when the delete button is clicked", async () => {
    const mockRemoveItem = jest.fn();
    render(<DeleteButton removeItem={mockRemoveItem} />);
    const user = userEvent.setup();
    await user.click(screen.getByTestId("delete-button"));
    expect(mockRemoveItem).toHaveBeenCalledTimes(1);
  });
});
