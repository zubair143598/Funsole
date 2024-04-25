import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useRef, useState } from "react";
import Link from "next/link";

const Technilogies = () => {
  const sliderRef = useRef(null);

  //for applying to 4 images on large and 1 on small

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[#FFFDF4] lg:pt-[6rem] pt-[3rem] ">
      <div className="flex flex-col items-center">
        <h1 className="text-[40px] px-4 text-center lg:text-[60px] font-bold  ">
          TECHNOLOGIES WE WORK WITH
        </h1>
      </div>
      <div
        id="category"
        className="   lg:py-[4rem]  py-[2rem]  px-[30px]  flex   uppercase tracking-[2px] flex-col justify-between "
      >
        <Slider
          className="mt-[90px] sm:mt-[30px] "
          {...settings}
          ref={sliderRef}
        >
          <div>
            <img
              className=" relative px-3 w-auto"
              src="/assists/adobe.png"
              alt=""
            />
          </div>
          <div>
            <img className=" px-3"  src="/assists/android.png" alt="" />
          </div>
          <div>
            <img className=" px-3" src="/assists/kotlin.png" alt="" />
          </div>
          <div>
            <img className=" px-3" src="/assists/maya.png" alt="" />
          </div>
          <div>
            <img className=" px-3" src="/assists/python.png" alt="" />
          </div>
          <div>
            <img className=" px-3" src="/assists/unity.png" alt="" />
          </div>
          <div>
            <img className=" px-3" src="/assists/xcode.png" alt="" />
          </div>
          <div>
            <img className=" relative px-3" src="/assists/maya.png" alt="" />
          </div>
        </Slider>
      </div>
      <div className=" flex items-center bg-[url('/assists/technologiesBg.png')] h-[390px] bg-cover  bg-no-repeat ">
        <div className=" lg:ms-[10rem]   ms-10 lg:mt-[2rem]">
          <h3 className=" text-[24px] mt-7 font-medium text-white lg:text-[30px] ">
            Have a question in mind? <br />
            Let’s talk about it.
          </h3>
          <Link href="/Contact" className="flex items-center">
            
          <button className=" font-medium mt-6 bg-[#FFD936] hover:bg-[#DAB200] hover:text-white text-[24px] uppercase px-4 py-2 rounded-lg">
            Contact Us
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Technilogies;
