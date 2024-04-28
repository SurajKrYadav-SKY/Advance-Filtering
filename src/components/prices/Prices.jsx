import React from "react";
import "./Prices.scss";
import Input from "../input/Input";

const Prices = ({ radioInputChange }) => {
  return (
    <div className="price">
      <h2>Prices</h2>
      <div className="content">
        <label className="sidebar-label-container">
          <input
            onChange={radioInputChange}
            type="radio"
            value=""
            name="test2"
          />
          <span>All</span>
        </label>
        <Input
          radioInputChange={radioInputChange}
          value={500}
          title="₹0-₹500"
          name="test2"
        />
        <Input
          radioInputChange={radioInputChange}
          value={1000}
          title="₹500-₹1000"
          name="test2"
        />
        <Input
          radioInputChange={radioInputChange}
          value={2000}
          title="₹1000-₹2000"
          name="test2"
        />
        <Input
          radioInputChange={radioInputChange}
          value={5000}
          title="₹2000-₹5000"
          name="test2"
        />
        <Input
          radioInputChange={radioInputChange}
          value={10000}
          title={"> ₹5000"}
          name="test2"
        />
      </div>
    </div>
  );
};

export default Prices;
