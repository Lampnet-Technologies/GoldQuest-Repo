import React from "react";
import HeroSection from "../HeroSection";

const CoursesHero = () => {
  return (
    <section>
      <HeroSection
        title="We Are A Growth & Transformation Consulting Firm"
        subtitle=""
        ctaText="Book Appointment"
        ctaLink="/contact"
        backgroundImage="/Rectangle-423.png"
      >
        
        <p className="text-white text-sm">
          For ambitious professionals and business owners who refuse to settle
          for average, our training programs provide the knowledge, tools, and
          confidence to outperform the competition. Your next level starts here.
        </p>
      </HeroSection>
    </section>
  );
};

export default CoursesHero;
