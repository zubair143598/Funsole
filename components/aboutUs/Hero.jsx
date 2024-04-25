import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

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
        <SwiperSlide className="relative">
          <img
            className="h-[56rem] object-cover object-center w-[100%]"
            src="./assists/team4.png"
            alt=""
          />
          <div className="absolute text-white text-center z-40 flex flex-col justify-center w-[100%] top-[40%]">
            <h1 className=" uppercase text-[40px] font-bold lg:text-[60px]">
              About<span className="text-[#DAB200]"> US</span> 
            </h1>
            <p className="text-[20px] font-medium  lg:text-[34px]">
            We Are a one stop solution for all your mobile development ideas.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[56rem] w-[100%] object-cover object-center"
            src="./assists/heroImg1.png"
            alt=""
          />
          <div className="absolute gap-y-10 text-white left-3 lg:left-[10rem] z-40 flex flex-col justify-center w-[100%] lg:w-[50%] top-[33%]">
            <h1 className=" uppercase text-[40px] font-bold lg:text-[60px]">
              Accelerate your <span className="text-[#DAB200]">digital</span>{" "}
              world
            </h1>
            <p className="text-[20px] font-medium  lg:text-[25px]">
              Discover the transformational impact of our <br /> developmental
              services can have on your business.{" "}
            </p>
            <button className="uppercase bg-[#DAB200] w-[12rem] text-[18px] text-black py-4 font-bold rounded-lg">
              Get in touch
            </button>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>  
  )
}

export default Hero