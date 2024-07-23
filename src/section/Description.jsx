import React, { useEffect, useRef } from "react";
import { usePost } from "../context/PostProvider";
import RevealLtr from "../components/animation/RevealLtr";
import RevealRtl from "../components/animation/RevealRtl";
export default function Description() {
  const { descript } = usePost();

  return (
    <div
      ref={descript}
      className="flex flex-row flex-col sm:flex-row bg-red-500  mt-10 justify-between items-center h-[680px] border-2 rounded-xl m-3"
    >
      <RevealLtr style="w-[50%] h-full bg-yellow-400 flex justify-center items-center">
        <img
          className=" rounded-3xl shadow-2xl z-10 xl:ml-36 lg:ml-24 md:ml-10 "
          src="../../public/images/description.png"
          width={700}
        />
      </RevealLtr>

      <RevealRtl style="w-[50%] flex justify-center items-center">
        <p className="text-right lg:w-96 md:w-60 text-[20px] leading-normal ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطر آنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </RevealRtl>
    </div>
  );
}
