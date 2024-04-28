import React from "react";
import "./Categories.scss";
import Input from "../input/Input";

const Categories = ({ radioInputChange }) => {
  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="content">
        <label className="sidebar-label-container">
          <input
            onChange={radioInputChange}
            type="radio"
            value=""
            name="test"
          />
          <span>All</span>
        </label>
        <Input
          radioInputChange={radioInputChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          radioInputChange={radioInputChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          radioInputChange={radioInputChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          radioInputChange={radioInputChange}
          value="heels"
          title="Heels"
          name="test"
        />

        {/* <labe className="sidebar-label-container">
          <span>All</span>
          <input type="radio" name="test" />
        </labe>
        <label className="sidebar-label-container">
          <span>Sneakers</span>
          <input type="radio" name="test" />
        </label>
        <label className="sidebar-label-container">
          <span>Flats</span>
          <input type="radio" name="test" />
        </label>
        <label className="sidebar-label-container">
          <span>Sandles</span>
          <input type="radio" name="test" />
        </label>
        <label className="sidebar-label-container">
          <span>Heels</span>
          <input type="radio" name="test" />
        </label> */}
      </div>
    </div>
  );
};

export default Categories;
