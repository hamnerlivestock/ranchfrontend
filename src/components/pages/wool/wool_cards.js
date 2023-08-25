import React from "react";
import "../../../styles/pages/HamnerCards.scss";
import CardItem from "../CardItem";

function WoolCards() {
  return (
    <div className="hamnercards">
      <div className="another_part">
        <h1>
          Our Wool is Columbia White Wool and Natural Colored Columbia
          Rambouilet Cross.
        </h1>
        <br></br>
      </div>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/IMG_6580.JPG"
              text="Colored Fleece Micron: 26.8 and White Fleece Micron: 28"
              label="Micron"
              // path="/about_us"
            />
            <CardItem
              src="images/white_fleece.jpeg"
              text="Average Staple Lenghth is between 3-5 inches. A ewe's fleece weighs between 8-9 pounds and a ram's fleece weighs between 10-12 pounds."
              label="Average Staple Length"
              // path="/about_us"
            />
            <CardItem
              src="images/champion_fleece.jpeg"
              text="Pure Black, Charcoal, Grey, Silver, White, Paint(Black and White Mix) "
              label="Our Wool Comes in Many Colors"
              // path="/about_us"
            />
          </ul>
          {/* <ul className="cards__items">
            <CardItem
              src="images/IMG_4581.JPG"
              text="Explore the new lambs"
              label="Lambs"
              path="/about_us"
            />
            <CardItem
              src="images/IMG_3012.PNG"
              text="Winners Circle"
              label="Awards"
              path="/products"
            />
            <CardItem
              src="images/IMG_2603.jpg"
              text="Explore Our Sheep"
              label="Sheep"
              path="/sign-up"
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default WoolCards;
