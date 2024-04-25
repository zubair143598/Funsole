
import LifeAt from '@/components/LifeAt'
import Navbar2 from '@/components/Navbar2'
import OurMission from '@/components/OurMission'
import About from '@/components/aboutUs/About'
import Hero from '@/components/aboutUs/Hero'
import Question from '@/components/aboutUs/Question'
import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <Navbar2 />
      <Hero/>
      <About/>
      <OurMission/>
      <LifeAt/>
      <Question/>
    </div>
  )
}

export default AboutUs