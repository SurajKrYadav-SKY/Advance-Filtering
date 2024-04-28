import React from "react";
import "./Buttons.scss";

const Buttons = ({ onClickHandler, value, title }) => {
  return (
    <button className="btn" onClick={onClickHandler} value={value}>
      {title}
    </button>
  );
};

export default Buttons;
