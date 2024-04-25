import Navbar2 from "@/components/Navbar2";
import Question from "@/components/aboutUs/Question";
import Hero from "@/components/career/Hero";
import JoinFunsol from "@/components/career/JoinFunsol";
import Vacancies from "@/components/career/Vacancies";
import React from "react";

const Career = () => {
  return (
    <div>
      <Navbar2 />
      <Hero />
      <JoinFunsol/>
      <Vacancies/>
      <Question/>
    </div>
  );
};

export default Career;
