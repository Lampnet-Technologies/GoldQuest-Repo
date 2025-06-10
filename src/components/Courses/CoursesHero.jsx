import React from "react";
import HeroSection from "../HeroSection";

const CoursesHero = () => {
  return (
    <section>
      <HeroSection
        title="We Are A Growth & Transformation Consulting Firm"
        subtitle="We partner with startups, SMEs, and corporate leaders to transform challenges into opportunities:"
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
