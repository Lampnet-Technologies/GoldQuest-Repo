import React from "react";
import HeroSection from "../HeroSection";

const HomeHeroSection = () => {
  return (
    <section>
      <HeroSection
        title=" We are a growth & transformation consulting firm"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iureplaceat blanditiis dolorem doloribus corrupti at saepe, enim, eum ipsam fugiat dolor iusto minima illum minus similique vero est nobis. Autem?"
        ctaText="Book Appointment"
        ctaLink="/contact"
        backgroundImage="/hero-bg.png"
      />
    </section>
  );
};

export default HomeHeroSection;
