import React from "react";

const JoinFunsol = () => {
  return (
    <div
      data-aos-duration="3000"
      data-aos="fade-up"
      className="bg-[#FEF4CB] text-center py-[3rem] lg:py-[6rem] "
    >
      <div className="flex flex-col items-center">
        <h1 className="text-[30px] lg:text-[60px] font-bold  ">
          WHY JOIN FUNSOL?
        </h1>
        

        <p className="lg:w-[70%]  w-[95%] text-[22px] lg:text-[25px] font-medium mt-8 leading-[40px]">
          Technologists, creators, programmers, and independent thinkers… You’ve
          arrived at the proper location. For more than 15 years, Funsol
          Technologies has provided a diverse range of client organizations with
          top-notch business solutions supported by IT. We have maintained our
          position at the forefront of enterprise technology by prioritizing
          employee quality. We support creating an environment at work that
          encourages innovation and original thought. We provide you with the
          tools you need to succeed and win the respect you deserve on a global
          scale.
        </p>
        <img src="./assists/whyjoin.png" className="lg:w-[50%] mt-14 p-3" alt="" />
      </div>
    </div>
  );
};

export default JoinFunsol;
