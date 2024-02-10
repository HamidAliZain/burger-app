"use client";
import Image from "next/image";
import { easeIn, motion } from "framer-motion";
import Logo from "../../public/images/bunlogo.png";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="fixed w-10 h-10 text-red-700  right-3 top-3 sm:hidden"
        onClick={() => setOpen(true)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>{" "}
      <motion.div
        className={
          open
            ? "fixed top-0 bottom-0 w-full text-white bg-black flex flex-col  justify-center items-center list-none gap-4"
            : "hidden"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 absolute top-4 right-4 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
        <li className="focus:border-[#990811] hover:border-[#990811] hover:border-b-2    ">
          Menu
        </li>
        <li className="focus:border-[#990811] hover:border-[#990811]  hover:border-b-2  ">
          About
        </li>
        <li className="focus:border-[#990811] hover:border-[#990811]  hover:border-b-2  ">
          Delivery
        </li>
        <button className="py-3 px-8 rounded-full bg-[#990811]">Contact</button>
      </motion.div>{" "}
      <header className="bg-black py-2 z-10 ">
        <nav className="hidden justify-evenly items-center max-w-6xl mx-auto  text-white  sm:flex ">
          <div className="flex items-center   w-1/2">
            <Image src={Logo} alt="logo" className="w-20 h-20 " />
            <h1 className="mt-6">Burger</h1>
          </div>
          <div className="flex justify-end items-center  list-none gap-4   w-1/2  mt-6">
            <li className="focus:border-[#990811] hover:border-[#990811] hover:border-b-2    ">
              Menu
            </li>
            <li className="focus:border-[#990811] hover:border-[#990811]  hover:border-b-2  ">
              About
            </li>
            <li className="focus:border-[#990811] hover:border-[#990811]  hover:border-b-2  ">
              Delivery
            </li>
            <button className="py-3 px-8 rounded-full bg-[#990811]">
              Contact
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
