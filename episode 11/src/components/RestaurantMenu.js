import Shimmer from "./Shimmer";
import { Routes, Route, useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const res = useRestaurantMenu(resId);

  if (!res) return <Shimmer />;

  return (
    <div className="menu">
      <p key={res?.key}>{res?.name}</p>
      {/* <p>{res?.cuisines.join(",")}</p> */}
      <p key={res?.key}>{res?.locality}</p>
      <p key={res?.key}>{res?.avgRatingString}</p>
      <p key={res?.key}>{res?.costForTwoMsg}</p>
    </div>
  );
};

export default RestaurantMenu;
