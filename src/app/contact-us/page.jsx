import React from 'react'
import ContactHero from '../../components/ContactJs/ContactHero'
import GetInTouch from '../../components/ContactJs/GetInTouch'
import LocationSection from '../../components/ContactJs/LocationSection'

const page = () => {
  return (
    <main>
      <ContactHero/>
      <GetInTouch/>
      <LocationSection/>
    </main>
  )
}

export default page
