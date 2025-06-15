import AboutUsHero from '@/components/AboutUs/AboutUsHero'
import MissionAnsVision from '@/components/AboutUs/MissionAnsVision'
import TheTeam from '@/components/AboutUs/TheTeam'
import WhoWeAre from '@/components/AboutUs/WhoWeAre'
import OurMissionVision from '@/components/AboutUs/OurMissionVision'
import WorkWithUs from '@/components/AboutUs/WorkWithUs'
import WhatWeDoInPicture from '@/components/AboutUs/WhatWeDoInPicture'
import React from 'react'

const page = () => {
  return (
    <main>
      <AboutUsHero />
      <WhoWeAre/>
      <OurMissionVision/>
      <WorkWithUs/>
      <WhatWeDoInPicture/>
      <MissionAnsVision/>
      <TheTeam/>
    </main>
  )
}

export default page
