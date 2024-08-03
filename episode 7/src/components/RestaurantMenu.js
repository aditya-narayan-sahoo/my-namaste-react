import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Routes, Route, useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [res, setRes] = useState({});
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=27.8973944&lng=78.0880129&menuId=${resId}`
    );
    const jsonData = await data.json();
    console.log(jsonData);
    setRes(jsonData);
  };

  if (!res) return <Shimmer />;

  return (
    <div className="menu">
      <p>{res?.name}</p>
      {/* <p>{res?.cuisines.join(",")}</p> */}
      <p>{res?.locality}</p>
      <p>{res?.avgRatingString}</p>
      <p>{res?.costForTwoMsg}</p>
    </div>
  );
};

export default RestaurantMenu;
