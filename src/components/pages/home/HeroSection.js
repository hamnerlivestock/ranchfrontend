import React from "react";

import { Button } from "../../../utilities/Button.js";
import "../../../styles/utilities/HomeCards.css";
import "../../../styles/Hero.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/hamnerclip2.mp4" width="100%" autoPlay loop muted />
      <h1>HAMNER LIVESTOCK RANCH</h1>
      <p>Serving Quality Meat to Resturaunts and Individuals</p>
      <p>Raising Columbia Breeding Sheep and Natural Colored Columbia's.</p>
      <p>
        We sell white, black, grey, silver, and black and white(paints) fleeces
        to handspinners.
      </p>
      <div className="hero-btns">
        {/* <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button> */}
        <Link to="/trailer">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={console.log("hey")}
          >
            WATCH TRAILER <i className="far fa-play-circle" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;