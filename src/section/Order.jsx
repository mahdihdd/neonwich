import React from "react";
import { usePost } from "../context/PostProvider";
import ProgressItem from "../components/ProgressItem";

const prgressData = [
  { number: 1, text: "دادن ایـده و دانـستن ابـعاد حـدودی" },
  { number: 2, text: "تـماس با مـا و ارائـه طـرح" },
  {
    number: 3,
    text: "آمـاده کـردن طـرح نـهایی",
  },
  {
    number: 4,
    text: "پـروسـه سـاخت",
  },
  {
    number: 5,
    text: "تـحویـل کـار",
  },
];
export default function Order() {
  const { howOrder } = usePost();

  return (
    <div
      ref={howOrder}
      className="flex text-white flex-col justify-between bg-[#C4D7B2] items-center mx-20 2s:mx-3 s:mx-16 sm:mx-2 h-[1200px] sm:h-[1300px] md:h-[300px] lg:h-[400px] border-2 rounded-xl"
    >
      <h1 className="text-[30px] mt-5 ">مـراحل آمـاده سـازی</h1>
      <div className="flex flex-col mb-10 justify-center md:flex-row-reverse gap-14 sm:gap-10 md:gap-8 lg:gap-10 xl:gap-24 2xl:gap-32 w-full">
        {prgressData.map((data) => (
          <ProgressItem key={data.number} item={data} />
        ))}
      </div>
    </div>
  );
}
