import React from "react";
import ReactDOM from "react-dom";

const name = "Hello";
const num = 7;
const lastname = "World";

ReactDOM.render(
  <div>
    <h1>
      Hello {name} {lastname}!
    </h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
    <p>Your lucky number is {num + 3}</p>
  </div>,
  document.getElementById("root")
);
