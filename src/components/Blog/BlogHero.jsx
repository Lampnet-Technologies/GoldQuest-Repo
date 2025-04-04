import React from 'react'
import HeroSection from '../HeroSection'

const BlogHero = () => {
  return (
    <section>
      <HeroSection title="Stay up-to-date with our latest contents"
        subtitle=""
        ctaText=""
        ctaLink="/contact"
        backgroundImage="/hero-bg.png">
            <p className="text-2xl text-white">Blog</p>
      </HeroSection>
      
      
    </section>
  )
}

export default BlogHero
