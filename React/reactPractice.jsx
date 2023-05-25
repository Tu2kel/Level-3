import React from "react";
import ReactDOM from "react-dom/client";

const navbar = (
  <nav>
    <h1>Bob's Bistro</h1>
    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

ReactDom.render(navbar, document.getElementById("root"));

/* NEW WAY SINCE UPDATE IS: 

ReactDOM.createRoot(document.getElementById("root")).render(navbar)

OR 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(navbar);

*/