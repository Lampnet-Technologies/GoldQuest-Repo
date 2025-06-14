import React from "react";
import HeroSection from "../HeroSection";

const HomeHeroSection = () => {
  return (
    <section>
      <HeroSection
        title=" Premier Business 
Training & Consulting for Africa’s Next Leaders"
        
        ctaText="Book Appointment"
        ctaLink="/contact"
        backgroundImage="/hero-bg.png"
      />
    </section>
  );
};

export default HomeHeroSection;
