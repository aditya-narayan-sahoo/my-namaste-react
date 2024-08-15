import ResturantCard, { withVegLabel, withNonVegLabel } from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Error from "./Error";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [isTopRated, setIsTopRated] = useState(false);

  const VegRestaurantCard = withVegLabel(ResturantCard);
  const NonVegRestaurantCard = withNonVegLabel(ResturantCard);
  // Code to use Live API, take care of API not respnoding
  const [list, setList] = useState([]);
  //console.log(list);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
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
      <div className="filter flex items-center justify-center">
        <div className="search m-3 p-3">
          <input
            type="text"
            placeholder=" Name of the Restaurant"
            className="border border-black rounded-md mr-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-1 bg-blue-300 m-1 rounded-lg hover:bg-blue-400 hover:font-medium"
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
          className="px-2 py-1 h-9 -ml-3 bg-green-400 rounded-md hover:bg-green-500 hover:font-medium"
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
      <div className="flex flex-wrap">
        {filteredList.map((resturant) => (
          <Link key={resturant.info.id} to={"/restaurant/" + resturant.info.id}>
            {resturant.info.veg ? (
              <VegRestaurantCard key={resturant.info.id} resData={resturant} />
            ) : (
              <NonVegRestaurantCard
                key={resturant.info.id}
                resData={resturant}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
