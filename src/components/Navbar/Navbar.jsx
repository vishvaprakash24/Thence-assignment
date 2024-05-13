import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={assets.logo} alt="" />
      </div>
      <div className="nav-buttons">
        <button className="white-btn">
          <a href="/register">Get Projects</a>
        </button>
        <button className="black-btn">Onboard Talent</button>
      </div>
    </div>
  );
};

export default Navbar;
