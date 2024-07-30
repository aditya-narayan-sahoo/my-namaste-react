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
/* pass styles as a js object.
const styleCard = {
  backgroundColor: "#f0f0f0",
};
*/
const ResturantCard = () => {
  return (
    <div className="res-card" /* inline style : style={styleCard}*/>
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x6x1srh1d4mlnyppoyvw"
        alt="resturant-image"
        className="res-logo"
      />
      <h3>Keshari Garnish</h3>
      <h4>North Indian, Biryani, Asian</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search bar to make</div>
      <div className="res-container">
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
