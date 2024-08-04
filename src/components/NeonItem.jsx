import React from "react";
import RevealUp from "./animation/RevealUp";

export default function NeonItem() {
  return (
    <RevealUp>
      <div className="flex flex-col shadow-lg rounded-2xl">
        <div className="h-60">
          <img
            src="../../public/images/original-92b75fc0380ddffebb03afeda02a9c30.png"
            className="w-full h-full bg-contain rounded-2xl"
            alt="محصول"
          />
        </div>
        <div className="relative flex justify-center items-center bg-[#e0e0e0]">
          <p className="absolute -top-5 bg-[#ededed] w-[150px] py-1 text-center z-10 rounded-md text-[20px]">
            محصول شماره 1
          </p>
        </div>
      </div>
    </RevealUp>
  );
}
