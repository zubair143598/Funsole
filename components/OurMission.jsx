import React from "react";

const OurMission = () => {
  return (
    <div className="lg:my-[6rem] my-[4rem]">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-y-0 gap-y-10 items-center ">
      <div className="ps-8 block lg:hidden">
          <h2 className="lg:text-[40px] leading-[35px] text-[30px] font-bold ">Our Mission</h2>
          <p className="text-[22px] lg:text-[25px] text-justify">
            The IT industry is dedicated to making technology work
            for everyone, enabling new possibilities, fostering collaboration,
            and sparking imagination in a secure, ethical, and sustainable way.
            This new mission emphasizes the role of the IT industry in advancing
            technological innovation, while considering the needs and concerns
            of society, and emphasizing accessibility, sustainability, and
            ethics.
          </p>
        </div>
        <div data-aos="fade-right" className="flex justify-center">
          <img
            src="./assists/onboard.png"
            className="lg:w-[650px] w-[90%]"
            alt=""
          />
        </div>
        <div className="ps-8 lg:block hidden">
          <h2 className="text-[40px] font-bold ">Our Mission</h2>
          <p className="text-[25px] text-justify  mt-6">
            The IT industry is dedicated to making technology work
            for everyone, enabling new possibilities, fostering collaboration,
            and sparking imagination in a secure, ethical, and sustainable way.
            This new mission emphasizes the role of the IT industry in advancing
            technological innovation, while considering the needs and concerns
            of society, and emphasizing accessibility, sustainability, and
            ethics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
