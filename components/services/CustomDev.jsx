import React from "react";

const CustomDev = () => {
  return (
    <div className="lg:py-[6rem] bg-[#F8F8F8] py-[4rem]">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-y-0 gap-y-10 items-center ">
        <div className="lg:px-8 px-2 ">
          <h2 className="lg:text-[45px]  text-[28px] font-bold ">
            Custom Software Development
          </h2>
          <p className="text-[22px] lg:text-[25px] mt-3 text-justify">
            Desires to enhance your unique style with the benefit of
            customization. Here You’re! <br /> At Funsol Technologies, we go beyond the
            conventional to engineer the future through our Custom Software
            Development Services. We meticulously design, craft, deploy, and
            maintain bespoke software solutions tailored to cater to specific
            users, functions, and organizations. Our repertoire of services
            includes application customization, modernization, and management.
            Through our custom software solutions, we empower businesses to
            enhance customer retention and satisfaction, minimize errors, and
            stimulate sales growth. Experience the power of personalization with
            Funsol Technologies.
          </p>
        </div>
        <div data-aos="fade-right" className="flex justify-center">
          <img
            src="./assists/onboard.png"
            className="lg:w-[550px] w-[90%]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CustomDev;
