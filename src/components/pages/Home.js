import React from "react";
import HeroSection from "./home/HeroSection";
import HomeCards from "./home/HomeCards";
import "../../styles/utilities/HomeCards.scss";

export function Home() {
    return (
        <>
            <HeroSection />
            <HomeCards />
        </>
    );
}
