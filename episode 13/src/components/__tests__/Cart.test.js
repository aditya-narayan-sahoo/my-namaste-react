import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import RestaurantMenu from "../../components/RestaurantMenu";
import MOCK_RES_MENU from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../../components/Header";
import Cart from "../../components/Cart";
import "@testing-library/jest-dom";

// Mocking the fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_RES_MENU),
  })
);

const renderWithProviders = () => {
  return render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
        <Cart />
      </Provider>
    </BrowserRouter>
  );
};

describe("Restaurant Menu Component", () => {
  beforeEach(async () => {
    await act(async () => {
      renderWithProviders();
    });
  });

  it("should display the correct number of food items and manage cart items", () => {
    const accordionHeader = screen.getByText("Leon's Gourmet Collection (4)");

    // Open the accordion to reveal food items
    fireEvent.click(accordionHeader);
    expect(screen.getAllByTestId("foodItem").length).toBe(4);
    expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();

    // Add first food item to the cart
    const addBtns = screen.getAllByRole("button", { name: "Add+" });
    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

    // Add second food item to the cart
    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();
    expect(screen.getAllByTestId("foodItem").length).toBe(6);

    // Clear the cart
    const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });
    fireEvent.click(clearCartBtn);
    expect(screen.getAllByTestId("foodItem").length).toBe(4);
    expect(
      screen.getByText("Cart is empty. Add Items to the cart!")
    ).toBeInTheDocument();
  });
});
