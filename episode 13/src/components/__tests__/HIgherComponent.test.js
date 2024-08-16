import { render, screen } from "@testing-library/react";
import RestaurantCard, {
  withVegLabel,
  withNonVegLabel,
} from "../../components/ResturantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

describe("Higher-order components for labeling", () => {
  it("should render VEG label when using withVegLabel", () => {
    const VegLabeledRestaurantCard = withVegLabel(RestaurantCard);
    render(<VegLabeledRestaurantCard resData={MOCK_DATA} />);

    const vegLabel = screen.getByText("VEG");
    expect(vegLabel).toBeInTheDocument();
  });

  it("should render NON-VEG label when using withNonVegLabel", () => {
    const NonVegLabeledRestaurantCard = withNonVegLabel(RestaurantCard);
    render(<NonVegLabeledRestaurantCard resData={MOCK_DATA} />);

    const nonVegLabel = screen.getByText("NON-VEG");
    expect(nonVegLabel).toBeInTheDocument();
  });
});
