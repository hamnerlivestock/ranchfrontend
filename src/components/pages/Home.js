import React from "react";
import HeroSection from "./home/HeroSection";
import HomeCards from "./home/HomeCards";
import "../../styles/utilities/HomeCards.css";

export function Home() {
    return (
        <>
            <HeroSection />
            <HomeCards />
        </>
    );
}
