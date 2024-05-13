import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <p>&#169; Talup 2023. All rights reserved</p>
      </div>
      <div className="right">
        <a href="/">Terms & Conditions</a>
        <a href="/">Privacy Policy</a>
      </div>
    </div>
  );
};

export default Footer;
