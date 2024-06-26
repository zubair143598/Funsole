import React from "react";
import CountUp from "react-countup";

const AboutUs = () => {
  return (
    <div className=" bg-[#F8F8F8] py-[4rem] lg:py-[6rem]">
      <div className="  lg:pb-[6rem]">
        <h1 className=" text-center uppercase text-[40px] lg:text-[60px] font-semibold">
          About Us
        </h1>
        <p className="  lg:text-[22px] text-[18px] mt-6 leading-[35px] tracking-[2px] px-4 lg:px-[4rem] xl:px-[11rem]">
          We are a one stop solution for all your mobile development ideas.{" "}
          <br /> The creation of a program begins with a concept; a concept is
          all that’s required. However, this concept necessitates a purpose and
          a goal to be transformed into reality.
        </p>
      </div>
      <div className="flex gap-y-[5rem] lg:mt-0 mt-10 lg:flex-row  flex-col items-center  justify-evenly">
        <div className="flex flex-col items-center">
          <img
            src="./assists/tick.png"
            className="w-[120px] "
            alt="appDevelopment"
          />
          <h2 className="text-[40px] font-bold  uppercase text-center mt-6">
            <CountUp end={250} duration={2} />
            <span className=" font-bold">+</span>{" "}
            <br className=" " />{" "}
            <span className="text-[18px]">Published app</span>{" "}
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="./assists/tick2.png"
            className="w-[120px]"
            alt="gameDevelopment"
          />
          <h2 className="text-[40px] font-bold  uppercase text-center mt-6">
            <CountUp
              start={0}
              end={500}
              duration={2}
            />
            M+ <br className="" />{" "}
            <span className="text-[18px]">INSTALLS ON PLAYSTORE</span>{" "}
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="./assists/team.png"
            className="w-[120px]"
            alt="digitalMarketing"
          />
          <h2 className="text-[40px] font-bold  uppercase text-center mt-6">
            <CountUp end={200} duration={2} />+{" "}
            <br className=" " />
            <span className="text-[18px]">Strong Team</span>{" "}
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:gap-y-0 gap-y-10 lg:grid-cols-2 items-center mt-[6rem]">
        <div className=" px-3">
          <h2 className="lg:text-[40px] text-[26px] font-bold">
            The vision of Funsol Technologies
          </h2>
          <p className="text-[25px]  lg:pe-[300px] text-justify mt-6">
            We have to make Funsol Technologies a Unicorn  in the IT
            Industry.
          </p>
        </div>
        <div data-aos="fade-down" className=" flex justify-center">
          <img
            src="./assists/undertaking.png"
            className="lg:w-[650px] w-[90%] "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
