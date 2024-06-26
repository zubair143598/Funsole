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
        <SwiperSlide className="relative">
          <img
            className="h-[56rem] object-cover object-center w-[100%]"
            src="./assists/team4.png"
            alt=""
          />
          <div className="absolute text-white text-center z-40 flex flex-col justify-center w-[100%] top-[40%]">
            <h1 className=" uppercase text-[40px] font-bold lg:text-[60px]">
              About<span className="text-[red]"> US</span> 
            </h1>
            <p className="font-medium text-[24px] lg:text-[34px]">
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
          <div className="absolute gap-y-10 text-white left-3 lg:left-[10rem] z-40 flex flex-col justify-center w-[100%] lg:w-[50%] px-3 top-[33%]">
            <h1 className=" uppercase text-[40px] font-bold lg:text-[60px]">
              Accelerate your <span className="text-[red]">digital</span>{" "}
              world
            </h1>
            <p className=" font-medium  text-[25px]">
              Discover the transformational impact of our <br /> developmental
              services can have on your business.{" "}
            </p>
            <Link href="/Contact" className="flex items-center">
                <button className=" bg-[red] pb-2 hover:text-black text-[18px] xl:text-[22px] font-medium uppercase px-4 py-2 rounded-lg text">
                  Contact Us
                </button>
              </Link>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>  
  )
}

export default Hero