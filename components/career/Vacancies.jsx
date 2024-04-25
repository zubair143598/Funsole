import Link from "next/link";
import React from "react";

const Vacancies = () => {
  var data = [
    {
      date: "Jan 31,2024",
      position: "Flutter Developer",
      adress: "Gulberg Greens, Islamabad.",
      apply: "Apply Now",
    },
    {
      date: "Jan 31,2024",
      position: "SQA Engineer",
      adress: "Gulberg Greens, Islamabad.",
      apply: "Apply Now",
    },
    {
      date: "Jan 31,2024",
      position: "UI/UX Designer",
      adress: "Gulberg Greens, Islamabad.",
      apply: "Apply Now",
    },
    {
      date: "Jan 31,2024",
      position: "ASO Executive",
      adress: "Gulberg Greens, Islamabad.",
      apply: "Apply Now",
    },
    {
      date: "Jan 31,2024",
      position: "Video Editor",
      adress: "Gulberg Greens, Islamabad.",
      apply: "Apply Now",
    },
    {
      date: "Jan 31,2024",
      position: "Unity Developer",
      adress: "Gulberg Greens, Islamabad.",
      apply: "Apply Now",
    },
  ];

  return (
    <div className="lg:py-[6rem] lg:px-[10rem] px-2 bg-[#FFFDF4] py-[4rem]">
      <h1 className=" uppercase text-center text-[45px] font-bold">
        Open Vacancies
      </h1>
      <div className=" gap-x-4 px-10 lg:px-0 lg:gap-y-0 gap-y-5 flex flex-col lg:flex-row justify-between">
        <input
          type="text"
          className=" border border-black placeholder:text-[18px] placeholder:px-[10px]  py-[10px] rounded lg:w-[50%]"
          placeholder="Keywords"
        />
        <input
          type="text"
          className=" border border-black placeholder:text-[18px] placeholder:px-[10px] py-[10px] rounded lg:w-[50%]"
          placeholder="Location"
        />
      </div>
      <div className="text-center py-[2rem]">
        <button className=" bg-[#FFD936] hover:text-white hover:bg-[#DAB200] text-[18px] xl:text-[18px] font-normal  px-10 py-[8px] rounded-lg text">
          Search Vacancies
        </button>
      </div>

      <div className=" grid grid-cols-1 lg:grid-cols-3">
        {data.map((value, index) => {
          return (
            <Link href="#" className="m-3 gap-y-3 flex flex-col bg-[#F8F8F8] rounded p-3">
              <p>
                <span className=" font-medium text-[16px]">Due Date: </span>
                {value.date}
              </p>
              <h3 className=" text-[23px] font-bold">{value.position}</h3>
              <p>{value.adress}</p>
              <div className=" flex justify-end text-end">
                <p className="border-b-2 text-[20px] font-semibold border-black" >{value.apply}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Vacancies;
