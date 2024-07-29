import React from "react";
import ReactDOM from "react-dom/client";

// to create parent and children like tags in html
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "This is a h1 tag")
  )
);

// to create siblings like tag
const parent2 = React.createElement(
  "div",
  { id: "parent2" },
  React.createElement("div", { id: "child2" }, [
    React.createElement("h2", {}, "This is h2 tag"),
    React.createElement("h2", {}, "This is h2 tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent2);
console.log(parent2);
