import React from "react";
import "../../styles/header/Header.css";

import { Icon } from "@iconify/react";
import logo from "../../assets/images/logo.webp";
const Header = () => {
  return (
    <div>
      {/* <div className="navbar-main">
        <img className="logo" src={logo} alt="Logo" />
        <h1>Welcome to React App</h1>
        <p>Account Login </p>
        <Icon icon="mdi:cart" />

     
      </div> */}
      <div class="main">
        <img className="left" src={logo} alt="Logo" />
        <h3 className="center">Welcome to React App</h3>
        <div className="right-corner">
          <p>Account Login </p>
          <Icon icon="mdi:cart" />
        </div>
      </div>
    </div>
  );
};

export default Header;
