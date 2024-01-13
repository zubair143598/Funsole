import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LifeAt from "@/components/LifeAt";
import Message from "@/components/Message";
import OurMission from "@/components/OurMission";
import StepAhead from "@/components/StepAhead";
import Technilogies from "@/components/Technilogies";
import WhyJoin from "@/components/WhyJoin";



export default function Home() {
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
