import React from "react";

const MobileApp = () => {
  return (
    <div className="lg:py-[6rem] bg-[#F8F8F8] py-[4rem]">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-y-0 gap-y-10 items-center ">
        <div className="lg:px-8 px-2 ">
          <h2 className="lg:text-[48px]  text-[28px] font-bold ">
            Mobile Application Development
          </h2>
          <p className="text-[22px] lg:text-[25px] mt-3 text-justify">
            At Funol Technologies, we don't just create mobile applications - we
            sculpt digital experiences that are truly exceptional. Our
            commitment to our clients and end users is to offer a seamless blend
            of creativity, cutting-edge technology, and unparalleled customer
            service.
            <br />
            Intrigued?
            <br />
            Dive deeper into the world of our vibrant mobile application development services and discover the difference that Funsol Technologies can make for your business.
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

export default MobileApp;
