import React from "react";

const Footer = () => {
  return (
    <div className="flex lg:flex-row flex-col text-white  bg-black py-[3rem] lg:py-[6rem]">
      <div className="lg:w-[30%] px-4">
        <img src="./assists/logo.png" className="w-[170px]" alt="" />
        <p className="text-[24px] pt-4">
          We believe in revolutionizing the future of mobile in an intriguing
          way that requires a minimal personal touch.
        </p>
      </div>
      <div className="lg:w-[20%] flex flex-col px-4 lg:items-center">
        <h3 className="uppercase font-medium pb-4 text-[26px]">Company</h3>
        <ul className="">
          <a href=""><li className=" hover:text-[#CBAB23] text-[22px] font-medium py-2">Home</li></a>
          <a href=""><li className=" hover:text-[#CBAB23] text-[22px] font-medium py-2">About Us</li></a>
          <a href=""><li className=" hover:text-[#CBAB23] text-[22px] font-medium py-2">Services</li></a>
          <a href=""><li className=" hover:text-[#CBAB23] text-[22px] font-medium py-2">Careers</li></a>
          <a href=""><li className=" hover:text-[#CBAB23] text-[22px] font-medium py-2">Blog</li></a>
        </ul>
      </div>
      <div className="lg:w-[20%] flex flex-col px-4 lg:items-center">
        <h3 className="uppercase font-medium pb-4 text-[26px]">Support</h3>
        <ul className="">
          <a href=""><li className="hover:text-[#CBAB23] text-[22px] font-medium py-2">Home</li></a>
          <a href=""><li className="hover:text-[#CBAB23] text-[22px] font-medium py-2">About Us</li></a>
          <a href=""><li className="hover:text-[#CBAB23] text-[22px] font-medium py-2">Services</li></a>
          <a href=""><li className="hover:text-[#CBAB23] text-[22px] font-medium py-2">Careers</li></a>
          <a href=""><li className="hover:text-[#CBAB23] text-[22px] font-medium py-2">Blog</li></a>
        </ul>
      </div>
      <div className="lg:w-[30%] px-4">
        <h3 className="uppercase font-medium pb-4 text-[26px]">Social Media</h3>
        <div className="flex gap-x-7">
          <a
            target="blank"
            href="https://www.linkedin.com/in/muhammad-zubair-b089b6246
"
          >
            <img
              src="./assists/facebook.png"
              className="w-[26px]"
              alt="facebook"
            />
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/in/muhammad-zubair-b089b6246
"
          >
            <img src="./assists/insta.png" className="w-[26px]" alt="insta" />
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/in/muhammad-zubair-b089b6246
"
          >
            <img
              src="./assists/linkedin.png"
              className="w-[26px]"
              alt="linkedin"
            />
          </a>
        </div>
        <p className="text-[24px] pt-4">
          Marvel Arcade, 5th Floor ,Civic Center, Gulberg Greens Executive Block
          Koral Town, Islamabad, Islamabad Capital Territory 44000
        </p>
      </div>
    </div>
  );
};

export default Footer;
