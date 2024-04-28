import React from "react";
import "./Recomendation.scss";
import Buttons from "../buttons/Buttons";

const Recomendation = ({ handleButtonClick }) => {
  return (
    <div className="container-btn">
      <h2>Recommended</h2>
      <div className="buttons">
        <Buttons
          onClickHandler={handleButtonClick}
          value=""
          title="All Product"
        />
        <Buttons onClickHandler={handleButtonClick} value="Nike" title="Nike" />
        <Buttons onClickHandler={handleButtonClick} value="Puma" title="Puma" />
        <Buttons
          onClickHandler={handleButtonClick}
          value="Adidas"
          title="Adidas"
        />
        <Buttons onClickHandler={handleButtonClick} value="Vans" title="Vans" />
        <Buttons
          onClickHandler={handleButtonClick}
          value="Campus"
          title="Campus"
        />
        <Buttons
          onClickHandler={handleButtonClick}
          value="Sparx"
          title="Sparx"
        />
      </div>
    </div>
  );
};

export default Recomendation;
