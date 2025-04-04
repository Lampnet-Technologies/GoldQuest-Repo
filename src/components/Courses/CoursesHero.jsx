import React from "react";
import HeroSection from "../HeroSection";

const CoursesHero = () => {
  return (
    <section>
      <HeroSection
        title="We Are A Growth & Transformation Consulting Firm"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"
        ctaText="Book Appointment"
        ctaLink="/contact"
        backgroundImage="/Rectangle-423.png"
      >
        {/* Optional Children Content */}
        <p className="text-white text-sm">Transforming businesses with expert guidance.</p>
      </HeroSection>
    </section>
  );
};

export default CoursesHero;
