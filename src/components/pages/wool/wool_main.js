import React from "react";
import "../../../styles/app.scss";
import WoolCards from "./wool_cards";
// import heromap from "../../../util/map/heromap";
import HeroMap from "../../../util/map/heromap";

// import Footer from "../navigation/Footer";
export default function wool_main() {
  return (
    <div className="wool_main">
      <>
        <HeroMap />
        <br></br>
        <WoolCards />
        {/* <Footer /> */}
      </>
    </div>
  );
}
