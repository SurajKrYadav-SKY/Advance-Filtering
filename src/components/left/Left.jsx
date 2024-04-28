import React, { useState } from "react";
import "./Left.scss";
import Logo from "../logo/Logo";
import Categories from "../categories/Categories";
import Prices from "../prices/Prices";
import Colors from "../colors/Colors";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Left = ({ radioInputChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`left ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      <Logo className="logo" />
      {/* {!isMenuOpen && <Logo />} */}
      {/*  Render Logo only when menu is closed */}
      <div className="filter">
        <Categories radioInputChange={radioInputChange} />
        <Prices radioInputChange={radioInputChange} />
        <Colors radioInputChange={radioInputChange} />
      </div>
    </div>
  );
};

export default Left;
