import React from "react";
import {motion} from "framer-motion"
const LifeAt = () => {
  return (
    <div className="bg-[#F8F8F8] py-[3rem] lg:py-[6rem]">
      <div className="flex flex-col lg:gap-y-0 gap-y-10 lg:flex-row items-center ">
        <div className=" lg:w-[40%] ms-3">
          <h3 className="text-[30px] font-bold lg:text-[40px]">
            Life at Funsol
          </h3>
          <p className="text-[24px] font-normal text-justify mt-8 leading-[40px] ">
            Aside from the high work and opportunities for leadership
            development, the Funsol family events are frequently cited as a
            major reason why Funsol is a top choice for professionals throughout
            Pakistan.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0,x:-120, y: -150 }}
          animate={{ opacity: 1,x:0,  y:0 }}
          transition={{ duration: 2 }}
          duration={5000}
          className="lg:w-[40%] flex justify-center"
        >
          <img src="./assists/team1.png" className="w-[90%]" alt="" />
        </motion.div>
        <div
          data-aos="fade-down"
          className="lg:w-[20%] gap-y-6 flex flex-col items-center"
        >
          <img
            src="./assists/team2.png"
            className="lg:w-[77%] w-[90%]"
            alt=""
          />
          <img
            src="./assists/team3.png"
            className="lg:w-[77%] w-[90%]"
            alt=""
          />
        </div>
      </div>
      <div className="text-center pt-[6rem]">
        <button className=" font-medium bg-[#FFD936] hover:bg-[#DAB200] hover:text-white text-[24px] uppercase px-4 py-2 rounded-lg text">
          View more
        </button>
      </div>
    </div>
  );
};

export default LifeAt;
