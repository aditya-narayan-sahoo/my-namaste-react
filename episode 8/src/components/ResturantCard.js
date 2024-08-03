import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props; //Destructuring
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info; //optional chaining
  return (
    <div className="res-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="resturant-image"
        className="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default ResturantCard;
