
import Navbar2 from '@/components/Navbar2'
import Question from '@/components/aboutUs/Question'
import AllEvents from '@/components/events/AllEvents'
import Hero from '@/components/events/Hero'
import LifeAtFunsol from '@/components/events/LifeAtFunsol'
import React from 'react'

const Events = () => {
  return (
    <div className=' bg-[#FEF4CB]'>
      <Navbar2 />
        <Hero/>
        <LifeAtFunsol/>
        <AllEvents/>
        <Question/>
    </div>
  )
}

export default Events