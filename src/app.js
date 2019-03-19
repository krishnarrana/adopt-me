import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams.jsx";
import { Animal } from "petfinder-client";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
