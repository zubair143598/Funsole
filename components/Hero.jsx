import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Navbar2 from "@/components/Navbar2";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <div className=" ">
      <Navbar2 />
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./assists/2024.png" className="h-[56rem] w-[100%] object-cover object-center" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[56rem] w-[100%] object-cover object-center"
            src="./assists/heroImg1.png"
            alt=""
          />
          <div className="absolute gap-y-10 text-white left-3 lg:left-[10rem] z-40 flex flex-col justify-center w-[100%] lg:w-[50%] top-[33%]">
            <h1 className=" uppercase text-[40px] font-bold lg:text-[60px]">Accelerate your <span className="text-[#DAB200]">digital</span> world</h1>
            <p className="text-[20px] font-medium  lg:text-[25px]">Discover the transformational impact of our <br /> developmental services can have on your business. </p>
            <button className="uppercase bg-[#DAB200] w-[12rem] text-[18px] text-black py-4 font-bold rounded-lg" >Get in touch</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="h-[56rem] object-cover object-center w-[100%]"
            src="./assists/heroImg2.png"
            alt=""
          />
          <div className="absolute text-white text-center z-40 flex flex-col justify-center w-[100%] top-[40%]">
            <h1 className=" uppercase text-[40px] font-bold lg:text-[60px]">one step <span className="text-[#DAB200]">ahead</span>  in technology</h1>
            <p className="text-[25px] font-medium  lg:text-[40px]">Design. Development. Consultancy.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
