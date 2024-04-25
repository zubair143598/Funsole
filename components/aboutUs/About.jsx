import React from "react";
import CountUp from "react-countup";

const About = () => {
  return (
    <div className=" bg-[#F8F8F8] py-[6rem]">
      <div className=" text-center lg:pb-[6rem]">
        <p className="  text-[22px] mt-6 leading-[35px] tracking-[2px] px-2 lg:px-[4rem] xl:px-[11rem]">
          The creation of a program begins with a concept; a concept is all
          that’s required. However, this concept necessitates a purpose and a
          goal to be transformed into reality.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:gap-y-0 gap-y-10 lg:grid-cols-2 items-center mt-[6rem]">
        <div className=" ps-3">
          <h2 className="text-[50px] font-black">
            The vision of Funsol Technologies
          </h2>
          <p className="text-[30px] mt-6">
            We have to make Funsol Technologies a Unicorn <br /> in the IT
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

export default About;
