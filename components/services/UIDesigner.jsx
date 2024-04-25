import React from "react";

const UIDesigner = () => {
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
            UI/UX DESIGN SERVICES
          </h2>
          <p className="text-[22px] lg:text-[25px] mt-3 text-justify">
            Hunting for a visionary and chic designing experts! Welcome to our
            world-class UI/UX design services, where we build not just websites
            and applications, but we create engaging, user-centric digital
            experiences. Our primary focus is to enhance the user's interaction
            with your digital products by identifying the key factors such as
            usability, accessibility, and captivating visual aesthetics. We aim
            to get the deep understanding of your users' behaviors, needs, and
            goals. We blend our design expertise with a comprehensive
            understanding of our audience, crafting an intuitive and seamless
            journey that not only meets but exceeds their expectations.
            Experience the magic of intuitive design with our UI/UX design
            services today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UIDesigner;
