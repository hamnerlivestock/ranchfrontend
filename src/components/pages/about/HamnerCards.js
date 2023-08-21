import React from "react";
import "../../../styles/utilities/HamnerCards.css";
import CardItem from "../../../utilities/cards/CardItem";

function Cards() {
    return (
      <div className="hamnercards">
        <div className="top">
          <h1>About the Hamners.</h1>
          <h2>
            Hamner Livestock got started in 1988 with a 'Platts' Columbia ewe lamb and a 'Platts' Columbia ram lamb. From that time
            on, the Hamner's added other breeders ewes and arams but coninually strived to keep the traditional 'Platts" Columbia look. They have
            purchased replacement stock from Woolstenhulme, Dalbow, A&K, Broken Dollar, Rice, Pitts, Frey, along with many others who have passed the Hamner's expectations.
            
            Over the years, the Hamner children, Alan and Tanya, have shown the sheep at the Uinta County Fair and Wyoming State Fair and had much success. Additionally, the family has exhibited sheep at the National
            Columbia Show and Sale, National Western Stock Show, Utah State Fair, and Eastern Idaho State Fair.
            
            In 2015, the Hamners purchased a Natural Colored ram and added a new dimension to their wool production. They now
            sell white wool along with natural colored fleeces to handspinners. They have exhibited animals and fleeces at the National Western Stock Show and Estes Wool Festival and had great success.
            They have shipped fleeces to over 30 states including Canada.
            
            The original flock was raised in Lyman Wyoming and in 2009 the Hamners moved the flock to Pinedale Wyoming, where it currently still resides.{" "}
          </h2>
        </div>
        <div className="middle">
          <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
                <CardItem
                  src="images/tanya.jpeg"
                  text="Tanya Hamner is a PRCA Photographer and a photographer professor at Western Wyoming. She runs and operates the ranch from August to May, while traveling back and forth from the college to the ranch. In May she hits the road to rodeos and lives 8 seconds through the camera. Tanya is the one who organizes the sales for the meat and wool with individuals and customers. She also keeps our website up to date."
                  label="Tanya Hamner"
                  // path="/about_us"
                />
                <CardItem
                  src="images/rex.jpeg"
                  text="Rex Hamner has been teaching Agriculture Education for 37 years. He has been an Wyoming FFA Advisor for 33 years. He now teaches in Tok, Alaska as the vocational teacher. He coaches wrestling up there and helps out with dog sledding. He comes down in May to the ranch and operates it till August while Tanya is on the rodeo trail."
                  label="Rex Hamner"
                  // path="/about_us"
                />
                <CardItem
                  src="images/gayle.jpeg"
                  text="Gayle Hamner has been teaching as a paraeducator for 20 years and taught preschool up in Tok Alaska. She now helps Tanya with the ranch and is the Sublette County Special Olympics Coach. She has a gift when it comes to special needs people. She hits the road in the summer and travels with Tanya to most of the rodeos."
                  label="Gayle Hamner"
                  // path="/about_us"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Cards;
  