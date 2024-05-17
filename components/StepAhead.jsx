import React from "react";
import { motion } from "framer-motion";

const StepAhead = () => {
  return (
    <div className=" bg-[#FEF4CB]  ">
      <div className=" text-center py-[4rem] px-3 lg:py-[6rem] ">
        <h1 className="uppercase text-[40px] lg:text-[60px]  font-semibold">
          One step ahead in technology
        </h1>
        <p className=" lg:text-[22px] text-center text-[24px] mt-6 leading-[35px] tracking-[2px]  lg:px-[4rem] xl:px-[11rem]">
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
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          className="flex flex-col items-center"
        >
          <img
            src="./assists/setting.png"
            className="w-[150px] "
            alt="appDevelopment"
          />
          <h2 className="text-[30px] font-semibold uppercase text-center mt-6">
            Apps <br className=" hidden lg:block" /> Development
          </h2>
        </div>
        <div data-aos="zoom-in" className="flex flex-col items-center">
          <img
            src="./assists/gameDevelopment.png"
            className="w-[150px]"
            alt="gameDevelopment"
          />
          <h2 className="text-[30px] font-semibold uppercase text-center mt-6">
            Game <br className=" hidden lg:block" /> Development
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <img
            src="./assists/digitalMarketing.png"
            className="w-[150px]"
            alt="digitalMarketing"
          />
          <h2 className="text-[30px] font-semibold uppercase text-center mt-6">
            Digital <br className=" hidden lg:block" /> Marketing
          </h2>
        </motion.div>
      </div>
      <div className="text-center py-[6rem]">
        <button className=" bg-[#334155] hover:text-black text-white  text-[18px] xl:text-[22px] font-medium uppercase px-8 py-3 rounded-lg text">
          view more
        </button>
      </div>
    </div>
  );
};

export default StepAhead;
