import React from "react";
import { usePost } from "../context/PostProvider";
import RevealUp from "./animation/RevealUp";

export default function NeonProduct() {
  return (
    <div className="grid 2s:grid-cols-1 s:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-10 mt-5 ">
      {/* product items */}
      <RevealUp>
        <div className="flex flex-col shadow-lg ">
          <div className="h-60 rounded-lg">
            <img
              src="../../public/images/original-92b75fc0380ddffebb03afeda02a9c30.png"
              className="w-full h-full bg-contain"
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
      <div className="flex flex-col shadow-lg ">
        <div className="h-60 rounded-lg">
          <img
            src="../../public/images/original-92b75fc0380ddffebb03afeda02a9c30.png"
            className="w-full h-full bg-contain"
            alt="محصول"
          />
        </div>
        <div className="relative flex justify-center items-center bg-[#e0e0e0]">
          <p className="absolute -top-5 bg-[#ededed] w-[150px] py-1 text-center z-10 rounded-md text-[20px]">
            محصول شماره 1
          </p>
        </div>
      </div>
      <div className="flex flex-col shadow-lg ">
        <div className="h-60 rounded-lg">
          <img
            src="../../public/images/original-92b75fc0380ddffebb03afeda02a9c30.png"
            className="w-full h-full bg-contain"
            alt="محصول"
          />
        </div>
        <div className="relative flex justify-center items-center bg-[#e0e0e0]">
          <p className="absolute -top-5 bg-[#ededed] w-[150px] py-1 text-center z-10 rounded-md text-[20px]">
            محصول شماره 1
          </p>
        </div>
      </div>
      <div className="flex flex-col shadow-lg ">
        <div className="h-60 rounded-lg">
          <img
            src="../../public/images/original-92b75fc0380ddffebb03afeda02a9c30.png"
            className="w-full h-full bg-contain"
            alt="محصول"
          />
        </div>
        <div className="relative flex justify-center items-center bg-[#e0e0e0]">
          <p className="absolute -top-5 bg-[#ededed] w-[150px] py-1 text-center z-10 rounded-md text-[20px]">
            محصول شماره 1
          </p>
        </div>
      </div>
      <div className="flex flex-col shadow-lg ">
        <div className="h-60 rounded-lg">
          <img
            src="../../public/images/original-92b75fc0380ddffebb03afeda02a9c30.png"
            className="w-full h-full bg-contain"
            alt="محصول"
          />
        </div>
        <div className="relative flex justify-center items-center bg-[#e0e0e0]">
          <p className="absolute -top-5 bg-[#ededed] w-[150px] py-1 text-center z-10 rounded-md text-[20px]">
            محصول شماره 1
          </p>
        </div>
      </div>
      <div className="flex flex-col shadow-lg ">
        <div className="h-60 rounded-lg">
          <img
            src="../../public/images/original-92b75fc0380ddffebb03afeda02a9c30.png"
            className="w-full h-full bg-contain"
            alt="محصول"
          />
        </div>
        <div className="relative flex justify-center items-center bg-[#e0e0e0]">
          <p className="absolute -top-5 bg-[#ededed] w-[150px] py-1 text-center z-10 rounded-md text-[20px]">
            محصول شماره 1
          </p>
        </div>
      </div>
      <div className="flex flex-col shadow-lg ">
        <div className="h-60 rounded-lg">
          <img
            src="../../public/images/original-92b75fc0380ddffebb03afeda02a9c30.png"
            className="w-full h-full bg-contain"
            alt="محصول"
          />
        </div>
        <div className="relative flex justify-center items-center bg-[#e0e0e0]">
          <p className="absolute -top-5 bg-[#ededed] w-[150px] py-1 text-center z-10 rounded-md text-[20px]">
            محصول شماره 1
          </p>
        </div>
      </div>
      <div className="flex flex-col shadow-lg ">
        <div className="h-60 rounded-lg">
          <img
            src="../../public/images/original-92b75fc0380ddffebb03afeda02a9c30.png"
            className="w-full h-full bg-contain"
            alt="محصول"
          />
        </div>
        <div className="relative flex justify-center items-center bg-[#e0e0e0]">
          <p className="absolute -top-5 bg-[#ededed] w-[150px] py-1 text-center z-10 rounded-md text-[20px]">
            محصول شماره 1
          </p>
        </div>
      </div>
      <div className="flex flex-col shadow-lg ">
        <div className="h-60 rounded-lg">
          <img
            src="../../public/images/original-92b75fc0380ddffebb03afeda02a9c30.png"
            className="w-full h-full bg-contain"
            alt="محصول"
          />
        </div>
        <div className="relative flex justify-center items-center bg-[#e0e0e0]">
          <p className="absolute -top-5 bg-[#ededed] w-[150px] py-1 text-center z-10 rounded-md text-[20px]">
            محصول شماره 1
          </p>
        </div>
      </div>
      <div className="flex flex-col shadow-lg ">
        <div className="h-60 rounded-lg">
          <img
            src="../../public/images/original-92b75fc0380ddffebb03afeda02a9c30.png"
            className="w-full h-full bg-contain"
            alt="محصول"
          />
        </div>
        <div className="relative flex justify-center items-center bg-[#e0e0e0]">
          <p className="absolute -top-5 bg-[#ededed] w-[150px] py-1 text-center z-10 rounded-md text-[20px]">
            محصول شماره 1
          </p>
        </div>
      </div>
    </div>
  );
}
