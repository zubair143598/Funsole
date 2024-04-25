import React from 'react'

const Hero = () => {
  return (
    <div className=" ">
    <div className="relative">
      <img
        className="h-[56rem] object-cover object-center w-[100%]"
        src="./assists/heroImg2.png"
        alt=""
      />
      <div className="absolute text-white text-center z-40 flex flex-col justify-center w-[100%] top-[40%]">
        <h1 className=" uppercase text-[40px] font-bold lg:text-[60px]">
          one step <span className="text-[#DAB200]">ahead</span> in technology
        </h1>
        <p className="text-[25px] font-medium  lg:text-[40px]">
          Design. Development. Consultancy.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Hero