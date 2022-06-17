import React from "react";
import "./Header.scss";

const Header = ({handleReset}) => {
  return (
    <div className="header">
      <h1>My Todos</h1>
      <button onClick={handleReset} className="header__button" type="button">
        Reset
      </button>
    </div>
  );
};

export default Header;
