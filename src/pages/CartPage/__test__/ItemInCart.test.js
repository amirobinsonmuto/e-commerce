import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ItemInCart from "../ItemInCart";
import { useState } from "react";
import QuantityButton from "../../../components/QuantityButton";

const item = {
  id: 1,
  name: "Test Item",
  description: "This is a test item.",
  price: 9.99,
  quantity: 2,
  image: "https://example.com/image.png",
};

describe("ItemInCart", () => {
  test("renders item information correctly", () => {
    render(<ItemInCart item={item} />);
    expect(screen.getByText(item.name)).toBeInTheDocument();
    expect(screen.getByText(item.description)).toBeInTheDocument();
    expect(screen.getByText(`$${item.price}`)).toBeInTheDocument();
    expect(screen.getByText(`Quantity: ${item.quantity}`)).toBeInTheDocument();
    expect(screen.getByAltText(`${item.name} image`)).toHaveAttribute(
      "src",
      item.image
    );
  });

  // jest.mock("react", () => ({
  //   ...jest.requireActual("react"),
  //   useState: jest.fn(),
  // }));

  // beforeEach(()=>{
  //   useState.mockImplementation(jest.requireActual('react').useState);
  //   //other preperations
  // })

  // test("increment", ()=>{
  //   useState.mockImplementation(()=>["someMockedValue", someMockOrSpySetter])
  // })

  // const mockSetState = jest.fn();

  // jest.mock("react", () => ({
  //   useState: (initial) => [initial, mockSetState],
  // }));

  // test("Can increment from 1 to 2", () => {
  //   const [_, increment] = useCounter(1);

  //   increment();

  //   expect(mockSetState).toHaveBeenCalledWith(2);
  // });

  // const mockSetState = jest.fn();
  // render(<QuantityButton quantity={3} setQuantity={mockSetState} />);
  // const user = userEvent.setup();
  // const decrementButton = screen.getByTestId("decrement-button");
  // await user.click(decrementButton);
  // expect(mockSetState).toHaveBeenCalledWith(2);

  //   it("removes item correctly", () => {
  //     const removeItem = jest.fn();
  //     const { getByTestId } = render(
  //       <ItemInCart item={item} removeItem={removeItem} />
  //     );
  //     const deleteButton = getByTestId("delete-button");
  //     userEvent.click(deleteButton);
  //     expect(removeItem).toHaveBeenCalledWith(item.id);
  //   });
});
