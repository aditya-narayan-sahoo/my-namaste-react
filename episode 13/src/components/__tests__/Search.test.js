import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../../components/Body";
import MOCK_RES_LIST from "../mocks/resListMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_RES_LIST);
    },
  });
});

it("should search resList for the pizza input", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardBeforeSearch.length).toBe(20);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  expect(searchBtn).toBeInTheDocument();
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);
  const cards = screen.getAllByTestId("resCard");
  //console.log(cards.length);
  expect(cards.length).toBe(2);
});

it("should filter resList for top rated restaurants", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardBeforeSearch.length).toBe(20);
  const topRatedBtn = screen.getByRole("button", {
    name: "4.3* & Above Resturants",
  });
  fireEvent.click(topRatedBtn);
  const filteredCards = screen.getAllByTestId("resCard");
  expect(filteredCards.length).toBe(15);
});
