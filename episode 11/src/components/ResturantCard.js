import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props; //Destructuring
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info; //optional chaining
  return (
    <div className="m-3 p-4 w-56 bg-gray-200 rounded-lg h-[500px] hover:bg-gray-300 hover:-translate-y-1 hover:translate-x-[1px]">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="resturant-image"
        className="rounded-lg"
      />
      <h3 className="font-bold font-serif text-lg py-1">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

//Higher order component

// input -> RestaurantCard    Output -> RestaurantCard-isOpen

export const withOpenLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-800 text-white rounded-md ml-3 px-2">
          OPEN
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};
export default ResturantCard;
