import React from "react";
import ReactDOM from "react-dom/client";

const Item = () => (
  <div>
    <h1 className="huehue">Item</h1>
  </div>
);
const elem = <span>Random</span>;

const HeadingComponent = () => (
  <div>
    {elem}
    {Item()}
    <Item />
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
