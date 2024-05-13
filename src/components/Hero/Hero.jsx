import React from "react";
import "./Hero.css";
import { assets } from "../../assets/assets";
const Hero = () => {
  return (
    <div className="hero">
      <div className="top">
        <p className="special-font">Success Stories</p>
        <h1>Every success journey we've encountered.</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img src={assets.hero} alt="" />
        </div>
        <div className="right">
          <h3>
            Enhance fortune 50 company’s insights teams research capabilities
          </h3>
          <div className="dots">
            <div className="dot dark"></div>
            <div className="dot light"></div>
            <div className="dot light"></div>
          </div>
          <button>
            Explore More
            <span>
              <img src={assets.arrowR} alt="" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
