import Shimmer from "./Shimmer";
import { Routes, Route, useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "../components/RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const res = useRestaurantMenu(resId);
  //console.log(res);
  const [showIndex, setShowIndex] = useState(null);
  if (!res) return <Shimmer />;

  // const { name, cuisines, costForTwoMessage } =
  //   res?.data?.cards[2]?.card?.card?.info;
  // const { itemCards } =
  //   res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
  // console.log(itemCards);
  const categories =
    res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || []; // Default to an empty array if undefined

  //console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl mb-2">
        {res?.data?.cards[2]?.card?.card?.info.name}
      </h1>
      <p className="font-bold text-lg">
        {res?.data?.cards[2]?.card?.card?.info?.cuisines.join(", ")} -{" "}
        {res?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}
      </p>
      {Array.isArray(categories) && categories.length > 0 ? (
        categories.map((category, index) => (
          //controlled component
          <RestaurantCategory
            key={`${category.id}-${index}`}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={setShowIndex}
            index={index}
          />
        ))
      ) : (
        <p>No categories available.</p> // Fallback message
      )}
    </div>
  );
};

export default RestaurantMenu;
