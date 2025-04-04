import React from 'react'
import CoursesHero from '../../components/Courses/CoursesHero'
import OurCourses, { CoachingAndMentorship, Courses } from '../../components/Courses/OurCourses'

const page = () => {
  return (
    <main>
      <CoursesHero />
      <OurCourses/>
      <Courses/>
      <CoachingAndMentorship/>
    </main>
  )
}

export default page
