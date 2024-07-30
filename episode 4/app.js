import React from "react";
import ReactDOM from "react-dom/client";

/* Basic planning of the app
- Header Component
  - Logo
  - Nav Items
- Body Component
  - Search
  - Resturnat Container
     - Resturant Card
- Footer Component
  - Copyright
  - Link
  - About Company like contact,address
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://penji.co/wp-content/uploads/2022/08/10.-mr.-d-food-logo.jpg"
          alt="Company-Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
