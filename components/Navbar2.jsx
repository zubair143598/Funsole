import React, { useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa6";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Collapse,
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
    <div className="  w-[100%] ">
      <Navbar className="bg-white lg:bg-white border-0  py-2 rounded-none px-4 lg:px-8 ">
        <div className=" items-center  ">
          <div className="flex  lg:mb-0 lg:mt-0 justify-between flex-row-reverse  lg:flex-row lg:items-center lg:gap-6 items-center ">
            <Typography
              as="li"
              className=" block lg:mt-0 cursor-pointer  font-medium"
            >
              <Link
                className="text-black
                 hover:text-[red]   items-center"
                href="/"
              >
                <img
                  src="./assists/Vivatech-Company-Logo.png"
                  className=" px-2 w-[138px]"
                  alt="logo"
                />
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
                  isActiveLink(link.href)
                    ? "text-[red] border-[red] border-b-4 "
                    : " text-black"
                } hidden lg:block text-[18px] xl:text-[20px] font-medium`}
              >
                <Link
                  className="hover:text-[red] items-center"
                  href={link.href}
                  passHref
                >
                  {link.label}
                </Link>
              </Typography>
            ))}
            <Typography
              as="li"
              variant="small"
              color="black"
              className="p-1 hidden text-[18px] xl:text-[20px] font-medium lg:block "
            >
              <p className="flex hover:text-[red] items-center">
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
                <button className=" bg-[#334155]  hover:bg-[#64748b] text-white hover:text-black text-[18px] xl:text-[20px] font-medium uppercase px-5 py-4 rounded-lg text">
                  Contact Us
                </button>
              </Link>
            </Typography>

            <IconButton
              variant="text"
              className=" h-6 w-6  text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6 text-black"
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
                  className="h-6 w-6 text-black"
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
        <Collapse open={openNav}>
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
              className="p-1 lg:hidden block text-[18px] xl:text-[20px] font-medium"
            >
              <Link
                className={` hover:text-[red] items-center ${
                  isActiveLink(link.href) ? "text-[red] " : "text-black"
                }`}
                href={link.href}
                passHref
              >
                {link.label}
              </Link>
            </Typography>
          ))}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navbar2;
