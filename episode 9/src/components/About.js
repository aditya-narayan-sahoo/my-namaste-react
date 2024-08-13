import React from "react";
import UserClass from "./UserClass";
import "../styles/about.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <h2 className="about-title">About Our Food Delivery App</h2>
        <p className="about-text">
          Welcome to our food delivery app, where we bring the best local
          restaurants right to your doorstep! Our mission is to make it easy and
          convenient for you to enjoy delicious meals from your favorite
          eateries without the hassle of going out.
        </p>

        <h3 className="about-subtitle">How It Works</h3>
        <ol className="about-list">
          <li className="about-list-item">
            Browse our extensive menu of cuisines and restaurants.
          </li>
          <li className="about-list-item">
            Select your favorite dishes and add them to your cart.
          </li>
          <li className="about-list-item">
            Choose your delivery location and preferred payment method.
          </li>
          <li className="about-list-item">
            Place your order and wait for your food to arrive!
          </li>
        </ol>

        <h3 className="about-subtitle">Our Features</h3>
        <ul className="about-list">
          <li className="about-list-item">
            Wide selection of restaurants and cuisines
          </li>
          <li className="about-list-item">Real-time order tracking</li>
          <li className="about-list-item">Secure payment options</li>
          <li className="about-list-item">Loyalty rewards program</li>
          <li className="about-list-item">24/7 customer support</li>
        </ul>

        <h3 className="about-subtitle">Why Choose Us?</h3>
        <p className="about-text">
          We are committed to providing you with the best possible food delivery
          experience. Our team of dedicated professionals works tirelessly to
          ensure that your orders are processed quickly and accurately, and that
          your food arrives fresh and hot every time.
        </p>

        <p className="about-text">
          We also believe in supporting our local community, which is why we
          partner with the best local restaurants and businesses to bring you
          the finest quality ingredients and flavors.
        </p>

        <h3 className="about-subtitle">Get Started Today</h3>
        <p className="about-text">
          Download our app or visit our website to start exploring our menu and
          placing your orders. We look forward to serving you and making your
          dining experience a delightful one!
        </p>
      </div>
      <UserClass name={"Class Wala Component"} location={"earth"} />
    </>
  );
};

export default About;
