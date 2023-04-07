import { render, screen } from "@testing-library/react";
import { FaExclamation } from "react-icons/fa";
import "@testing-library/jest-dom";
import App from "./App";

test("renders the NavBar", () => {
  render(<App />);
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.getByRole("navigation");
  expect(screen.getByRole("navigation")).toBeInTheDocument();
});

test("renders the Footer", () => {
  render(<App />);
  const navBarElement = screen.getByRole("contentinfo");
  expect(navBarElement).toBeInTheDocument();
});

// test("renders the HomePage by default", () => {
//   render(<App />);
//   const homePageElement = screen.getByTestId("home-page");
//   expect(homePageElement).toBeInTheDocument();
// });

// test('renders the ShopPage when the "/shop" path is accessed', () => {
//   render(
//     <BrowserRouter initialEntries={["/shop"]}>
//       <App />
//     </BrowserRouter>
//   );
//   const shopPageElement = screen.getByTestId("shop-page");
//   expect(shopPageElement).toBeInTheDocument();
// });

// test('renders the ItemDetailPage when the "/shop/:id" path is accessed', () => {
//   const testItemId = 'abc123';
//   render(
//     <BrowserRouter initialEntries={[`/shop/${testItemId}`]}>
//       <App />

//   );
//   const itemDetailPageElement = screen.getByTestId('itemdetailpage');
//   expect(itemDetailPageElement).toBeInTheDocument();
// });

// test('renders the CartPage when the "/cart" path is accessed', () => {
//   render(
//     <BrowserRouter initialEntries={["/cart"]}>
//       <App />
//     </BrowserRouter>
//   );
//   const cartPageElement = screen.getByTestId("cart-page");
//   expect(cartPageElement).toBeInTheDocument();
// });
