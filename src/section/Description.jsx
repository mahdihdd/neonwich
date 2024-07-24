import React, { useRef } from "react";
import { usePost } from "../context/PostProvider";
import RevealLtr from "../components/animation/RevealLtr";
import RevealRtl from "../components/animation/RevealRtl";
export default function Description() {
  const { descript } = usePost();

  return (
    <div
      ref={descript}
      className="bg-[#E1ECC8] flex flex-col-reverse justify-center sm:flex-row  mt-10 h-[500px] sm:h-[680px] border-2 rounded-xl m-3"
    >
      <RevealLtr style="h-full w-full sm:w-3/4  relative sm:bg-[#C3EDC0]  ">
        <div className="w-[300px] 2s:w-[310px] s:w-[340px] sm:w-[400px] absolute text-[19px] sm:text-[25px] left-1/2 bottom-2 transform -translate-x-1/2 sm:transform-none sm:-translate-x-0 mx-auto sm:bottom-2 sm:left-1 md:bottom-6 lg:bottom-16 lg:left-20 xl:left-[200px] 2xl:left-[300px] xxl:left-[550px] text-right bg-[#E9FFC2] p-5 rounded-xl leading-normal z-40">
          مجموعه نئون سنتر قزوین ملقب به نئون ویچ با هدف ساخت تابلو های نئون
          فلکسی در سال ۱۴۰۱ تاسیس شد. مجموعه نپون ویچ همواره در تلاش بودیم از با
          کیفیت ترین متریال برای ساخحت تابلو ها استفاده کنیم. از همین رو تمامی
          محصولات ساخته شده در مجموعه نئون سنتر قزوین دارای ۱۲ ماه گارانتی
          هستند. از سفارش خودتون لذت ببرید
        </div>
      </RevealLtr>

      {/* 
      
      
      */}

      <RevealRtl style="h-full sm:w-1/4 mx-8 mt-4 sm:mt-0 sm:mx-0 flex  justify-center items-center sm:relative grow sm:grow-0 sm:bg-[#F7FFE5]">
        <div className="w-[300px]  2s:mt-[-10px] 2s:w-[310px] s:w-[400px]   h-[200px] sm:w-[600px] sm:h-[400px]  sm:top-5 sm:right-2 z-10 absolute  md:right-10 lg:right-28 lg:top-12 xl:right-36 xl:top-20 2xl:right-80 xxl:right-96">
          <img
            className=" rounded-3xl shadow-2xl w-full h-full"
            src="../../public/images/description.png"
          />
        </div>
      </RevealRtl>
    </div>
  );
}
