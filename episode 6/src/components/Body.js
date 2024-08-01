import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  let [list, setList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=20.27060&lng=85.83340"
    );
    const jsonData = await data.json();
    console.log(jsonData);
    setList(
      jsonData?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
        .restaurants
    );
  };

  if (list.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = list.filter((res) => res.info.avgRating > 4);
            setList(filteredList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {list.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
