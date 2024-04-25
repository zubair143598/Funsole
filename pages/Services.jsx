import Navbar2 from "@/components/Navbar2";
import Technilogies from "@/components/Technilogies";
import CustomDev from "@/components/services/CustomDev";
import DigitalMarketing from "@/components/services/DigitalMarketing";
import GameDev from "@/components/services/GameDev";
import Hero from "@/components/services/Hero";
import HighTech from "@/components/services/HighTech";
import Hybrid from "@/components/services/Hybrid";
import MobileApp from "@/components/services/MobileApp";
import UIDesigner from "@/components/services/UIDesigner";
import React from "react";

const Services = () => {
  return (
    <div>
      <Navbar2 />
      <Hero />
      <HighTech />
      <MobileApp />
      <GameDev />
      <DigitalMarketing />
      <UIDesigner />
      <CustomDev />
      <Hybrid />
      <Technilogies />
    </div>
  );
};

export default Services;
