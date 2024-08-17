import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [name, setName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  //subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);
  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <img className="w-36" src={LOGO_URL} alt="Company-Logo" />
      </div>
      <div className="text-5xl p-8 m-4 font-medium font-serif">
        Mock Food App{" "}
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-5">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5">
            <Link to="/about">About</Link>
          </li>
          <li className="px-5">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-5">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <button
            className="px-5  bg-slate-300 p-1 -mt-1 rounded-md hover:bg-slate-400 hover:font-medium"
            onClick={() => {
              name === "Login" ? setName("Logout") : setName("Login");
            }}
          >
            {name}
          </button>
          <li className="px-5">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
