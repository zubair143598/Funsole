import React, { useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa6";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar2 = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const currentPathname = usePathname();

  const isActiveLink = (pathname) => {
    return pathname === currentPathname;
  };
  return (
    <div className="absolute z-10 w-[100%] ">
      <Navbar className=" top-0 z-10 bg-opacity-0 border-0   rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className=" items-center text-white ">
          <div className="flex mt-2 mb-4 justify-between flex-row-reverse lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 items-center ">
            <Typography
              as="li"
              className=" block lg:mt-0 mt-5  cursor-pointer py-1.5 font-medium"
            >
              <Link
                className="text-white
                 hover:text-[#DAB200]   items-center"
                href="/"
              >
                <img src="./assists/logo.png" className="w-[168px]" alt="" />
              </Link>
            </Typography>
            {[
              { href: "/", label: "Home" },
              { href: "/AboutUs", label: "About Us" },
              { href: "/Services", label: "Services" },
              { href: "/Career", label: "Career" },
              { href: "/Events", label: "Events" },
              { href: "/Blog", label: "Blog" },
            ].map((link, index) => (
              <Typography
                key={index}
                as="li"
                variant="small"
                color="black"
                className={`p-1 ${
                  isActiveLink(link.href) ? "text-[#CBAB23] border-[#CBAB23] border-b-4 " : " text-white"
                } hidden lg:block text-[18px] xl:text-[26px] font-medium`}
              >
                <Link className="hover:text-[#DAB200] items-center" href={link.href} passHref>
                  {link.label}
                </Link>
              </Typography>
            ))}
            <Typography
              as="li"
              variant="small"
              color="black"
              className="p-1 hidden text-white text-[18px] xl:text-[26px] font-medium lg:block "
            >
              <p className="flex hover:text-[#DAB200] items-center">
                <FaPhone /> +92-336-9628075
              </p>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="black"
              className="p-1 hidden hover:text-white lg:block font-normal"
            >
              <Link href="/Contact" className="flex items-center">
                <button className=" bg-[#FFD936] pb-2 hover:bg-[#DAB200] text-[18px] xl:text-[26px] font-medium uppercase px-4 py-2 rounded-lg text">
                  Contact Us
                </button>
              </Link>
            </Typography>

            <IconButton
              variant="text"
              className=" h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {[
            { href: "/", label: "Home" },
            { href: "/AboutUs", label: "About Us" },
            { href: "/Services", label: "Services" },
            { href: "/Career", label: "Career" },
            { href: "/Events", label: "Events" },
            { href: "/Blog", label: "Blog" },
          ].map((link, index) => (
            <Typography
              key={index}
              as="li"
              variant="small"
              color="black"
              className="p-1 lg:hidden block text-[18px] xl:text-[26px] font-medium"
            >
              <Link className={` hover:text-[#DAB200] items-center ${isActiveLink(link.href) ? "text-[#CBAB23] " : "text-white"}`} href={link.href} passHref>
                {link.label}
              </Link>
            </Typography>
          ))}
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Navbar2;
