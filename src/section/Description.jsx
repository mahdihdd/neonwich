import React, { useEffect, useRef } from "react";
import { usePost } from "../context/PostProvider";
import RevealLtr from "../components/animation/RevealLtr";
import RevealRtl from "../components/animation/RevealRtl";
export default function Description() {
  const { descript } = usePost();

  return (
    <div
      ref={descript}
      className="flex  flex-col sm:flex-row bg-[#E1ECC8]  mt-10 justify-between items-center h-[680px] border-2 rounded-xl m-3"
    >
      <RevealLtr style="w-[50%] h-full bg-[#F7FFE5] flex justify-center items-center">
        <img
          className=" rounded-3xl shadow-2xl z-10 2xl:ml-96 xl:ml-36 lg:ml-24 md:ml-10 "
          src="../../public/images/description.png"
          width={700}
        />
      </RevealLtr>

      <RevealRtl style="w-[50%] flex justify-center items-center">
        <p className="text-right lg:w-96 md:w-60 text-[30px] leading-normal ">
          مجموعه نئون سنتر قزوین ملقب به نئون ویچ با هدف ساخت تابلو های نئون
          فلکسی در سال ۱۴۰۱ تاسیس شد. مجموعه نپون ویچ همواره در تلاش بودیم از با
          کیفیت ترین متریال برای ساخحت تابلو ها استفاده کنیم. از همین رو تمامی
          محصولات ساخته شده در مجموعه نئون سنتر قزوین دارای ۱۲ ماه گارانتی
          هستند. از سفارش خودتون لذت ببرید
        </p>
      </RevealRtl>
    </div>
  );
}
