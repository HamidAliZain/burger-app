"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "../../public/images/herImage.png";
import playIcon from "../../public/icons/playBtn.svg";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className="">
      <section className=" bg-black text-white flex items-center flex-col-reverse sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-3 w-full  h-96 pl-0 pt-12 sm:pl-16  sm:items-start sm:w-1/2">
          <p className="text-3xl sm:text-6xl max-w-80">
            Tasty
            <span className="text-[#990811] text-xl sm:text-4xl">New</span>{" "}
            BURGER
          </p>
          <p className="max-w-96 text-center sm:text-start sm:max-w-80 px-2 sm:px-0  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <Image
            src={playIcon}
            alt="play"
            className="cursor-pointer"
            onClick={() => setOpen(true)}
          />
        </div>
        <Image src={heroImage} alt="heroImage" className=" w-2/3 sm:w-1/2" />
      </section>
      <div
        className={
          open
            ? "fixed top-0 bottom-0  bg-gradient-to-b from-slate-400  backdrop-blur-lg  w-full  flex justify-center items-center"
            : "hidden"
        }
      >
        <div className="flex flex-col items-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 my-2 text-white"
            onClick={() => setOpen(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <iframe
            src="https://www.youtube.com/embed/BXdhI_Qpt-k?si=l48Fg_ZxupemSY3s"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-[350px]  sm:w-[420px] h-60"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
