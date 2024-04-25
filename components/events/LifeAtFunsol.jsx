import React from "react";
import { motion } from "framer-motion";

const LifeAtFunsol = () => {
  return (
    <div className=" py-[3rem] lg:py-[6rem]">
      <div className=" lg:gap-y-0 gap-y-10 flex flex-col text-center   items-center ">
        <div className="ms-3 pb-[3rem] lg:pb-[6rem]  xl:w-[1140px] w-[90%] lg:w-[78%]  ">
          <h3 className="text-[30px] font-semibold uppercase  lg:text-[60px]">
            Life at Funsol
          </h3>
          <p className="lg:text-[28px] text-[20px] font-normal text-justify lg:text-center mt-8  leading-[40px] ">
            Aside from the high work and opportunities for leadership
            development, the Funsol family events are frequently cited as a
            major reason why Funsol is a top choice for professionals throughout
            Pakistan.
          </p>
        </div>
        <div className=" flex justify-start gap-y-6 lg:items-stretch items-center  lg:flex-row flex-col">
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            duration={5000}
            className="lg:w-[77%] w-[90%]  flex justify-center"
          >
            <img src="./assists/team1.png" className=" lg:ps-[3rem]" alt="" />
          </motion.div>
          <div
            data-aos="fade-down"
            className=" gap-y-6 lg:ms-5 lg:items-start ms-0 items-center flex flex-col "
          >
            <img
              src="./assists/team2.png"
              className="lg:w-[80%] w-[90%] h-[100%] "
              alt=""
            />
            <img
              src="./assists/team3.png"
              className="lg:w-[80%] w-[90%] h-[100%] "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeAtFunsol;
