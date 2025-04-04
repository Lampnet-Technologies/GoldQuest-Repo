import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";
import React from "react";
import HeroSection from "../HeroSection";

const AboutUsHero = () => {
  return (
    <section>
      <HeroSection  title="your growth is our growth"
        subtitle=""
        ctaText=""
        ctaLink="/contact"
        backgroundImage="/hero-bg.png">
        {/* Add children content here */}
        <p className="text-2xl text-white">About Us</p>
        
      </HeroSection>
       
    
    </section>
  );
};

export default AboutUsHero;
