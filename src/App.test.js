import { render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "./App";

describe("Router testing in App.js", () => {
  test("renders the NavBar", () => {
    render(<App />, { wrapper: BrowserRouter });
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.getByRole("navigation");
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  test("renders the Footer", () => {
    render(<App />, { wrapper: BrowserRouter });
    const navBarElement = screen.getByRole("contentinfo");
    expect(navBarElement).toBeInTheDocument();
  });

  test("renders the HomePage by default", () => {
    const route = "/e-commerce";
    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );
    const homePageElement = screen.getByTestId("home-page");
    expect(homePageElement).toBeInTheDocument();
  });

  test("renders the ShopPage when the route is /e-commerce/shop", () => {
    const route = "/e-commerce/shop";
    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );
    const shopPageElement = screen.getByTestId("shop-page");
    expect(shopPageElement).toBeInTheDocument();
  });

  test("renders the CartPage when the route is /e-commerce/cart", () => {
    const route = "/e-commerce/cart";
    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );
    const shopPageElement = screen.getByTestId("cart-page");
    expect(shopPageElement).toBeInTheDocument();
  });

  test('renders the ItemDetailPage when the "/e-commerce/shop/:id" path is accessed', () => {
    const testItemId = "2";
    render(
      <MemoryRouter initialEntries={[`/e-commerce/shop/${testItemId}`]}>
        <App />
      </MemoryRouter>
    );
    const itemDetailPageElement = screen.getByTestId("item-detail-page");
    expect(itemDetailPageElement).toBeInTheDocument();
  });

  test("when the shop now button is clicked, the ShopPage component is displayed", async () => {
    const route = "/e-commerce";
    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /shop now/i }));
    const shopPageElement = screen.getByTestId("shop-page");
    expect(shopPageElement).toBeInTheDocument();
  });
});
