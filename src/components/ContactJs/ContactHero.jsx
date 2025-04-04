import React from 'react'
import HeroSection from '../HeroSection'


const ContactHero = () => {
  return (
    <section>
      <HeroSection title="How can we help you?"
        subtitle=""
        ctaText=""
        ctaLink="/contact"
        backgroundImage="/Rectangle-424.png">
            <p className="text-2xl text-white">Contact Us</p>
      </HeroSection>
    </section>
  )
}

export default ContactHero
