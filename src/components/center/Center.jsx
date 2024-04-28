import React from "react";
import "./Center.scss";
import Recomendation from "../recomendation/Recomendation";
import Products from "../products/Products";

const Center = ({ handleButtonClick, result, query, handleInputChange }) => {
  return (
    <div className="center">
      <div className="top">
        <div className="searchBar">
          <img src="./images/search.png" alt=":)" />
          <input
            type="text"
            placeholder="Search"
            onChange={handleInputChange}
            value={query}
          />
        </div>
      </div>
      <div className="products">
        <Products result={result} />
      </div>
      <div className="bottom">
        <Recomendation handleButtonClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default Center;
