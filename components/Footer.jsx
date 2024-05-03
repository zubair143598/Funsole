import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const currentPathname = usePathname();

  const isActiveLink = (pathname) => {
    return pathname === currentPathname;
  };

  return (
    <div className="flex lg:flex-row flex-col text-white  bg-black py-[3rem] lg:py-[6rem]">
      <div className="lg:w-[30%] px-4">
        <div className=" flex lg:justify-start justify-center">
          <img src="./assists/logo.png" className="w-[170px]" alt="" />
        </div>
        <p className="lg:text-[24px] text-[18px]  pt-4">
          We believe in revolutionizing the future of mobile in an intriguing
          way that requires a minimal personal touch.
        </p>
      </div>
      <div className="lg:w-[20%] mt-5 lg:mt-0 flex flex-col px-4 lg:items-center">
        <h3 className="uppercase font-medium pb-3 text-[22px] lg:text-[26px]">
          Company
        </h3>
        <ul className="">
          {[
            { href: "/", label: "Home" },
            { href: "/AboutUs", label: "About Us" },
            { href: "/Services", label: "Services" },
            { href: "/Careers", label: "Careers" },
            { href: "/Blog", label: "Blog" },
          ].map((link, index) => (
            <Link key={index} href={link.href}>
              <li
                className={`hover:text-[red] text-[18px] lg:text-[22px] font-medium py-2 ${
                  isActiveLink(link.href) ? "text-[red]" : ""
                }`}
              >
                {link.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="lg:w-[20%]  hidden lg:flex flex-col px-4 lg:items-center">
        <h3 className="uppercase font-medium pb-4 text-[26px]">Support</h3>
        <ul className="">
          {[
            { href: "/", label: "Home" },
            { href: "/AboutUs", label: "About Us" },
            { href: "/Services", label: "Services" },
            { href: "/Careers", label: "Careers" },
            { href: "/Blog", label: "Blog" },
          ].map((link, index) => (
            <Link key={index} href={link.href}>
              <li
                className={`hover:text-[red] text-[22px] font-medium py-2 ${
                  isActiveLink(link.href) ? "text-[red]" : ""
                }`}
              >
                {link.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="lg:w-[30%]  px-4">
        <h3 className="uppercase lg:text-start text-center font-medium pb-4 text-[20px] lg:text-[26px]">
          Social Media
        </h3>
        <div className="flex lg:justify-start justify-center gap-x-7">
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
        <div>
          <ul className=" text-[14px] lg:text-[18px] mt-2">
            <li>Headquarter (UAE)</li>
            <li>Platinum Business Tower, Al-Nahda 2, Dubai – UAE</li>
            <li className=" mt-8">Pakistan</li>
            <li>Marvel Arcade, 5th Floor ,Civic Center, Gulberg Greens Executive Block Koral Town, Islamabad, Islamabad Capital Territory 44000</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
