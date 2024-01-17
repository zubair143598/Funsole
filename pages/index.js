import { useEffect } from "react";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LifeAt from "@/components/LifeAt";
import Message from "@/components/Message";
import OurMission from "@/components/OurMission";
import StepAhead from "@/components/StepAhead";
import Technilogies from "@/components/Technilogies";
import WhyJoin from "@/components/WhyJoin";
import AOS from 'aos';
import 'aos/dist/aos.css'



export default function Home() {
  useEffect(() => {
    AOS.init({
      
    });
    
  }, [])
  return (
    <main className="">
     
      <Hero/>
      <StepAhead/>
      <AboutUs/>
      <OurMission/>
      <LifeAt/>
      <Message/>
      <WhyJoin/>
      <Technilogies/>
      <Footer/>
    </main>
  )
}
