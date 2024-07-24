import React, { useRef } from "react";
import { usePost } from "../context/PostProvider";
import RevealLtr from "../components/animation/RevealLtr";
import RevealRtl from "../components/animation/RevealRtl";
export default function Description() {
  const { descript } = usePost();
  
  return (
    <div
      ref={descript}
      className="flex  sm:flex-row  mt-10  h-[680px] border-2 rounded-xl m-3"
    >
      <RevealLtr style="h-full w-full sm:w-3/4  relative bg-[#F7FFE5] ">
        <div className="w-[400px] absolute text-[25px] left-1/2 bottom-5 transform -translate-x-1/2 sm:transform-none sm:-translate-x-0  mx-auto sm:bottom-2 sm:left-1   md:bottom-6 lg:bottom-16 lg:left-20 xl:left-80   text-right  bg-[#E9FFC2] p-5 rounded-xl leading-normal z-40 ">
          مجموعه نئون سنتر قزوین ملقب به نئون ویچ با هدف ساخت تابلو های نئون
          فلکسی در سال ۱۴۰۱ تاسیس شد. مجموعه نپون ویچ همواره در تلاش بودیم از با
          کیفیت ترین متریال برای ساخحت تابلو ها استفاده کنیم. از همین رو تمامی
          محصولات ساخته شده در مجموعه نئون سنتر قزوین دارای ۱۲ ماه گارانتی
          هستند. از سفارش خودتون لذت ببرید
        </div>
      </RevealLtr>

      <RevealRtl style="h-full sm:w-1/4 relative bg-[#E1ECC8]">
        <div className="w-[200px] h-[100px] sm:w-[600px] sm:h-[400px] top-5  z-10 absolute  md:right-10 lg:right-28 lg:top-12 sm:right-2 ">
          <img
            className=" rounded-3xl shadow-2xl w-full h-full"
            src="../../public/images/description.png"
          />
        </div>
      </RevealRtl>
    </div>
  );
}
