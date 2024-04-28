import React from "react";
import "./Input.scss";

const Input = ({ radioInputChange, value, title, name }) => {
  return (
    <label className="color-label-container">
      <input
        onChange={radioInputChange}
        type="radio"
        value={value}
        name={name}
      />
      <span>{title}</span>
    </label>
  );
};

export default Input;
