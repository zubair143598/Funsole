import React from "react";

const Hybrid = () => {
  return (
    <div className="lg:my-[6rem] my-[4rem]">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-y-0 gap-y-10 items-center ">
        <div data-aos="fade-right" className="flex justify-center">
          <img
            src="./assists/onboard.png"
            className="lg:w-[550px] w-[90%]"
            alt=""
          />
        </div>
        <div className="lg:px-8 px-2 ">
          <h2 className="lg:text-[48px]  text-[28px] font-bold ">
          Hybrid App Development – Flutter & React Native
          </h2>
          <p className="text-[22px] lg:text-[25px] mt-3 text-justify">
            Funsol Technologies, at the intersection of innovation and
            technology, delivers unmatched Hybrid App Development Services using
            industry-leading frameworks - Flutter and React Native. We build
            apps that emulate the look and feel of native apps, offering
            seamless operation on both Android and iOS platforms. If you seek a
            platform to test Hybrid Mobile Apps built with Flutter or React
            Native, Funsol Technologies is your ideal partner.
          </p>
        </div>
      </div>
      <div className=" mt-[4rem]">
        <h3 className=" lg:text-[30px] text-[25px] px-3 lg:px-[5rem] text-center">Connect with our experts to learn how we can help you attain operational agility and expedite your time to market.</h3>
      </div>
    </div>
  );
};

export default Hybrid;
