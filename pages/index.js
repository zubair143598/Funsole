import { useEffect } from "react";
import AboutUs from "@/components/AboutUs";

import Hero from "@/components/Hero";
import LifeAt from "@/components/LifeAt";
import Message from "@/components/Message";
import OurMission from "@/components/OurMission";
import StepAhead from "@/components/StepAhead";
import Technilogies from "@/components/Technilogies";
import WhyJoin from "@/components/WhyJoin";
import AOS from 'aos';
import 'aos/dist/aos.css'
import Navbar2 from "@/components/Navbar2";



export default function Home() {
  useEffect(() => {
    AOS.init({
      
    });
    
  }, [])
  return (
    <main className="">
     <Navbar2/>
      <Hero/>
      <StepAhead/>
      <AboutUs/>
      <OurMission/>
      <LifeAt/>
      <Message/>
      <WhyJoin/>
      <Technilogies/>

    </main>
  )
}
