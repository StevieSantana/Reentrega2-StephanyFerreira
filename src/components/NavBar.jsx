import React from "react";

import CartWidget from "./CartWidget";

export const NavBar = () => {
  return (
    <div  className="navList">
      <ul className="header" >
        <li className="nav__li">
          <h1 className="sign" style={{fontFamily:" Cabin Sketch', cursive", marker:"none" }}>SHELLY'S BOOKSHOP</h1>
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
