import React from "react";
import Slides from "../_components/Swipper";
import RevealRtl from "../_components/animation/RevealRtl";
import RevealLtr from "../_components/animation/RevealLtr";

export default function Carousel() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center  md:justify-around rounded-2xl mt-5 shadow-sm mx-4 md:mx-16  lg:mx-44 py-5 md:py-12 px-4 bg-[#f9f9f9]">
      {/* بخش متن */}
      <RevealRtl style="flex flex-col gap-5  w-full md:w-1/2 text-center md:text-right">
        <h2 className="text-xl md:text-3xl lg:text-4xl text-green-800 mb-2">
          تابلو نئون
        </h2>
        <p
          dir="rtl"
          className="text-sm md:text-base  leading-relaxed text-justify"
        >
          تابلوهای نئون، با نورهای درخشان و رنگارنگ خود، زیبایی منحصر به فردی به
          فضاهای شهری و تجاری می‌بخشند. این تابلوها که از لوله‌های شیشه‌ای پر از
          گاز نئون ساخته می‌شوند، قابلیت انعطاف‌پذیری بالایی دارند و به همین
          دلیل می‌توانند به اشکال و حروف مختلف درآیند. نئون‌ها نه تنها برای
          تبلیغات، بلکه به عنوان عنصری تزئینی در طراحی داخلی و هنر نیز استفاده
          می‌شوند.
        </p>
      </RevealRtl>

      {/* بخش اسلایدر */}
      <RevealLtr style="w-full sm:w-3/4 md:w-1/2  h-auto ml-5">
        <Slides />
      </RevealLtr>
    </div>
  );
}
