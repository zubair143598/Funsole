import React from "react";

const DigitalMarketing = () => {
  return (
    <div className="lg:py-[6rem] bg-[#F8F8F8] py-[4rem]">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-y-0 gap-y-10 items-center ">
        <div className="lg:px-8 px-2 ">
          <h2 className="lg:text-[48px]  text-[28px] font-bold ">
            Digital Marketing
          </h2>
          <p className="text-[22px] lg:text-[25px] mt-3 text-justify">
            What good is a product if it isn’t effectively marketed? We believe
            that the correct marketing strategy gives our IT solutions a soul.
            Our marketing staff understands how to conduct an in-depth
            investigation and develop a goal-driven approach. You’ve come to the
            right place if you’re looking for a team that can take your products
            to new horizons!
          </p>
          <div className=" py-[6rem]">
        <button className=" bg-[#FFD936] hover:text-white hover:bg-[#DAB200] text-[18px] xl:text-[26px] font-medium uppercase px-8 py-3 rounded-lg text">
          view more
        </button>
      </div>
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

export default DigitalMarketing;
