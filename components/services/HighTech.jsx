import React from "react";
import CountUp, { useCountUp } from "react-countup";

const HighTech = () => {
  useCountUp({
    ref: "counter",
    enableScrollSpy: true,
  });
  return (
    <div className=" bg-[#FEF4CB] py-[6rem] ">
      <div className=" text-center lg:py-[6rem] ">
        <h1 className="uppercase text-[35px] lg:text-[60px] lg:px-[4rem] px-2 xl:px-[10rem]  font-semibold">
          HIGH-TECH, BUT WITH SIMPLICITY GARNISHED ON TOP
        </h1>
        <p className=" text-[19px] lg:text-[22px] text-justify mt-6 leading-[35px] tracking-[2px] px-2 lg:px-[4rem] xl:px-[11rem]">
          Channeling the power of advanced technology blended with a dash of
          innovative spirit, Funsol Technologies embodies the principle of
          unity, firmly professing “We Can” over “I Can.” Our strength lies in
          our collaborative approach, propelling us forward as a unified team.{" "}
          <br />
          We specialize in a broad spectrum of services, including mobile
          application and game development, web services enriched with
          E-Commerce functionalities, Python expertise, 3D modeling, media
          production, and custom software creation. Our proficiency extends to
          developing Hybrid Apps using Flutter and React Native, as well as iOS
          development, ensuring we cater to a wide variety of digital needs.{" "}
          <br />
          Recognizing the dynamic nature of today’s digital landscape, we
          constantly stay updated of the latest trends in digital marketing.
          This has allowed Funsol Technologies to consistently exceed its annual
          sales targets across all service lines, demonstrating our proficiency
          in leveraging these cutting-edge trends to deliver real business
          results.
        </p>
      </div>
      <div className="flex gap-y-[5rem] lg:mt-0 mt-10 lg:flex-row  flex-col items-center  justify-evenly">
        <div className="flex flex-col items-center">
          <h1 className=" text-orange text-[60px] font-bold">
            <CountUp start={0} duration={1} end={8} enableScrollSpy />
            <span>+</span>
          </h1>
          <h2 className="text-[30px] font-semibold  text-center">Years</h2>
        </div>
        <div className="flex flex-col items-center">
          <h1 className=" text-orange text-[60px] font-bold">
            <CountUp start={0} duration={1} end={200} enableScrollSpy />
            <span>+</span>
          </h1>
          <h2 className="text-[30px] font-semibold  text-center mt-6">
            Employees
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <h1 className=" text-orange text-[60px] font-bold">
            <CountUp start={0} duration={1} end={150} enableScrollSpy />
            <span className="">+</span>
          </h1>
          <h2 className="text-[30px] font-semibold  text-center mt-6">
            Applications
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <h1 className=" text-orange text-[60px] font-bold">
            <CountUp start={0} duration={1} end={500} enableScrollSpy />
            <span>M+</span>
          </h1>
          <h2 className="text-[30px] font-semibold  text-center mt-6">
            Downloads
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HighTech;
