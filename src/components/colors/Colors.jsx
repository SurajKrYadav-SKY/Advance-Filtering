import React from "react";
import "./Colors.scss";
import Input from "../input/Input";

const Colors = ({ radioInputChange }) => {
  return (
    <div className="colors">
      <h2>Colors</h2>
      <div className="content">
        <label className="sidebar-label-container">
          <input
            onChange={radioInputChange}
            type="radio"
            value=""
            name="test1"
          />
          <span>All</span>
        </label>
        <Input
          radioInputChange={radioInputChange}
          value="black"
          title="Black"
          name="test1"
        />
        <Input
          radioInputChange={radioInputChange}
          value="blue"
          title="Blue"
          name="test1"
        />
        <Input
          radioInputChange={radioInputChange}
          value="red"
          title="Red"
          name="test1"
        />
        <Input
          radioInputChange={radioInputChange}
          value="green"
          title="Green"
          name="test1"
        />
        <Input
          radioInputChange={radioInputChange}
          value="white"
          title="White"
          name="test1"
        />
      </div>
    </div>
  );
};

export default Colors;
