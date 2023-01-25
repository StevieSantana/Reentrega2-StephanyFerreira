import React from "react";
import CartWidget from "./CartWidget";

export const NavBar = () => {
  return (
    <div className="nav">
      <div></div>
      <ul className="nav__list">
        <li className="nav__li">
          <h1 className="sign">SHELLY'S BOOKSHOP</h1>
        </li>
        <li className="nav__li">
          <a className="nav__link" href="">
            <CartWidget />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
