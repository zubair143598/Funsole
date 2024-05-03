import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" ">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="./assists/2024.png"
            className="h-[45rem] w-[100%] object-cover object-center"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[45rem] w-[100%] object-cover object-center"
            src="./assists/heropic1.jpg"
            alt="heroPic2"
          />
          <div className="absolute gap-y-5 text-white left-3 lg:left-[10rem] z-40 flex flex-col justify-center w-[100%] lg:w-[50%] px-3 top-[28%]">
            <h1 className=" uppercase text-[40px] font-bold lg:text-[60px]">
              Accelerate your <span className="text-[red]">digital</span>{" "}
              world
            </h1>
            <p className=" font-medium  text-[25px]">
              Discover the transformational impact of our <br className=" lg:block hidden" /> developmental
              services can have on your business.{" "}
            </p>
            <Link href="/Contact" className="flex items-center">
                <button className=" bg-[red]  hover:text-black text-[18px] xl:text-[22px] font-medium uppercase px-6 py-[10px] rounded-lg text">
                  Contact Us
                </button>
              </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="h-[45rem] object-cover object-center w-[100%]"
            src="./assists/heroPic3.jpg"
            alt=""
          />
          <div className="absolute text-white text-center z-40 flex flex-col justify-center w-[100%] top-[40%]">
            <h1 className=" uppercase text-[40px] font-bold lg:text-[60px]">
              one step <span className="text-[red]">ahead</span> in
              technology
            </h1>
            <p className="text-[25px] font-medium  lg:text-[40px]">
              Design. Development. Consultancy.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
