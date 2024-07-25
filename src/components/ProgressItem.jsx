import React from "react";
import RevealUp from "../components/animation/RevealUp";

export default function ProgressItem({ item }) {
  return (
    <RevealUp>
      <div className="relative flex flex-col justify-start items-center 2xl:mb-3">
        <div className="absolute text-[20px] sm:text-[30px] md:text-[20px] 2xl:text-[25px] -top-6 md:-top-4 lg:-top-4   rounded-full flex justify-center shadow-lg items-center z-10 w-12 h-12 sm:w-16 sm:h-16 md:w-9 md:h-9 lg:w-12 lg:h-12     bg-[#A0C49D] bg-opacity-95">
          {item.number}
        </div>
        <div className="text-[24px] sm:text-[30px] md:text-[18px] lg:text-[24px]  mt-2 flex justify-center items-center shadow-lg w-36 h-36 md:w-[120px] md:h-[120px] sm:w-48 sm:h-48 lg:w-36 lg:h-36 p-6 rounded-full  text-center bg-[#E1ECC8] bg-opacity-50">
          {item.text}
        </div>
      </div>
    </RevealUp>
  );
}
