import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Error from "./Error";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [isTopRated, setIsTopRated] = useState(false);
  // Code to use Live API, take care of API not respnoding
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.8973944&lng=78.0880129&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    //console.log(jsonData);
    setList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <Error />;
  return list.length === 0 ? (
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
              const singleFiltered = list.filter((resuno) =>
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
            if (isTopRated) {
              // If already filtered, reset to show all restaurants
              setFilteredList(list);
              setIsTopRated(false);
            } else {
              // Filter to show only top-rated restaurants
              const topRatedList = list.filter(
                (res) => res.info.avgRating > 4.3
              );
              // console.log(topRatedList);
              setFilteredList(topRatedList);
              setIsTopRated(true);
            }
          }}
        >
          4.3* & Above Resturants
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((resturant) => (
          <Link to={"/restaurant/" + resturant.info.id}>
            <ResturantCard key={resturant.info.id} resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
