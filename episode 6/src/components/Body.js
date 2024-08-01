import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
const Body = () => {
  const [filterText, setFilterText] = useState("4* and Above Resturants");
  const [myList, setMyList] = useState(resList);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState(resList);

  // Code to use Live API, beware of API not respnoding
  /*
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=20.27060&lng=85.83340&carousel=true&third_party_vendor=1"
    );
    const jsonData = await data.json();
    setList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }; */

  return myList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const singleFiltered = myList.filter((resuno) =>
                resuno.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredList(singleFiltered);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            if (filterText === "4* and Above Resturants") {
              const myFilteredList = myList.filter(
                (res) => res.info.avgRating > 4
              );
              setMyList(myFilteredList);
              setFilteredList(myFilteredList);
              setFilterText("All Resturants");
            } else {
              setMyList(resList);
              setFilteredList(resList);
              setFilterText("4* and Above Resturants");
            }
          }}
        >
          {filterText}
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
