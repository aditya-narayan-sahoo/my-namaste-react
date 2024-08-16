import { render, screen } from "@testing-library/react";
import RestaurantCard from "../../components/ResturantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import UserContext from "../../utils/UserContext";

it("should render RestaurantCard component with props mock data", () => {
  render(
    <UserContext.Provider value={{ loggedInUser: "Default User" }}>
      <RestaurantCard resData={MOCK_DATA} />
    </UserContext.Provider>
  );

  const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");
  const cuisines = screen.getByText(
    "American, Snacks, Turkish, Portuguese, Continental"
  );
  const avgRating = screen.getByText("4.5 stars");
  const costForTwo = screen.getByText("₹300 for two");
  const deliveryTime = screen.getByText("17 minutes");
  const loggedInUser = screen.getByText("User : Default User");

  expect(name).toBeInTheDocument();
  expect(cuisines).toBeInTheDocument();
  expect(avgRating).toBeInTheDocument();
  expect(costForTwo).toBeInTheDocument();
  expect(deliveryTime).toBeInTheDocument();
  expect(loggedInUser).toBeInTheDocument();
});
