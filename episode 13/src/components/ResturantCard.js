import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = ({ resData }) => {
  const { info } = resData || {};
  const { loggedInUser } = useContext(UserContext);
  const {
    cloudinaryImageId,
    name = "Unknown Restaurant",
    cuisines = [],
    avgRating = "N/A",
    costForTwo = "N/A",
    sla = { deliveryTime: "N/A" },
  } = info || {};

  return (
    <div
      data-testid="resCard"
      className="m-3 p-4 w-56 bg-gray-200 rounded-lg h-[500px] hover:bg-gray-300 hover:-translate-y-1 hover:translate-x-[1px]"
    >
      <img
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="restaurant"
        className="rounded-lg"
      />
      <h3 className="font-bold font-serif text-lg py-1">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

// Higher-order component for labeling
const withLabel = (RestaurantCard, label, labelColor) => {
  return (props) => (
    <>
      <label
        className={`absolute ${labelColor} text-white rounded-md ml-3 px-2`}
      >
        {label}
      </label>
      <RestaurantCard {...props} />
    </>
  );
};

export const withVegLabel = (RestaurantCard) =>
  withLabel(RestaurantCard, "VEG", "bg-green-600");

export const withNonVegLabel = (RestaurantCard) =>
  withLabel(RestaurantCard, "NON-VEG", "bg-red-600");

export default RestaurantCard;
