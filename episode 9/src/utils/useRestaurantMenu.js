import { useEffect, useState } from "react";
const useRestaurantMenu = (resId) => {
  const [res, setRes] = useState({});
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=27.8973944&lng=78.0880129&menuId=${resId}`
    );
    const jsonData = await data.json();
    setRes(jsonData);
  };
  return res;
};

export default useRestaurantMenu;
