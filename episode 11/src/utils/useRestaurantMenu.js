import { MENU_API_URL } from "./constants";
import { useEffect, useState } from "react";
const useRestaurantMenu = (resId) => {
  const [res, setRes] = useState({});
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const jsonData = await data.json();
    setRes(jsonData);
  };
  return res;
};

export default useRestaurantMenu;
