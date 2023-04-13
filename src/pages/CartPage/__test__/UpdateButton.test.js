import { render, screen, renderHook } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import UpdateButton from "../UpdateButton";

describe("Update Button", () => {
  test("handleQuantityChange function is fired when the update button is clicked", async () => {
    const mockHandleQuantityChange = jest.fn();
    render(<UpdateButton handleQuantityChange={mockHandleQuantityChange} />);
    const user = userEvent.setup();
    await user.click(screen.getByTestId("update-button"));
    expect(mockHandleQuantityChange).toHaveBeenCalledTimes(1);
  });
});
